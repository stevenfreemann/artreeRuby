class TransactionsController < ApplicationController
  before_action :set_transaction, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token
  require "http"
  
  
  def index
    @transactions = Transaction.all
  end
  
  def create
    cost = params[:total_cost]
    iva = cost * 0.19
    consumo = cost * 0.08
    total_cost = cost + iva + consumo
    items = (params[:products])

    @transaction = Transaction.new(products: items, total_cost: (total_cost) , iva_tax: (iva), consumption_tax: (consumo), user: current_user)  
    @transaction.save
    @transaction.ref_number = (DateTime.now.strftime("%d%m%Y")+(sprintf "%07d", @transaction.id)) #numero de referencia interno de Artree
    @transaction.save

    puts "------------env------------#{Rails.env}"
    
    #como la transaccion se genera al hacer click en "pagar", aun no se sabe que metodo va a escojer el usuario, se generan ambas firmas por lo tanto.
    if Rails.env.development?
      secret = ENV["WOMPI_INTEGRITY_SECRET_TEST"]
      public_key = ENV["WOMPI_TEST_PUBLIC_KEY"]
    else
      secret = ENV["WOMPI_INTEGRITY_SECRET_PROD"]
      public_key = ENV["WOMPI_PROD_PUBLIC_KEY"]
    end
    price = total_cost.to_s + "00" #wompi requiere centavos, y sin agregar el punto, 9500 = 9500000
    wompi_chain = @transaction.ref_number.to_s + price + "COP" + secret
    @transaction.wompi_sign = Digest::SHA2.hexdigest(wompi_chain)
    
    if Rails.env.development?
      merchantID = ENV["PAYU_MERCHANT_ID_TEST"]
      api_key = ENV["PAYU_TEST_APIKEY"]
      payu_url = ENV["PAYU_TEST_URL"]
    else
      merchantID = ENV["PAYU_MERCHANT_ID_PROD"]
      api_key = ENV["PAYU_PROD_APIKEY"]
      payu_url = ENV["PAYU_PROD_URL"]
    end
    payu_chain = "#{api_key}~#{merchantID}~#{@transaction.ref_number}~#{@transaction.total_cost}~COP"
    @transaction.payu_sign = Digest::MD5.hexdigest(payu_chain)
    @transaction.save
    
    #objeto con todas las variables ambientales segun enviroment, para formularios de pago
    obj = { 
      public_key: public_key,
      wompi_redirect: ENV["WOMPI_REDIRECT"],
      payu_api_key: api_key, 
      payu_url: payu_url,
      merchantID: merchantID,
      account_id: ENV["PAYU_ACCOUNT_ID"],
      payu_response:ENV["PAYU_RESPONSE"],
      payu_confirmation:ENV["PAYU_CONFIRMATION"],
    }

    render json: {transaction: @transaction, env: obj}
  end
  
  def stock

    #calculo de si todos los productos en el carrito tienen stock suficiente
    res = params[:ids]
    itemStock = {}
    obj = {}
    res.each_pair do |id, amount|
      photo = Photo.find(id)
      obj[photo] = amount
      available = photo.stock >= amount.to_i ? true : false
      itemStock[id] = available
    end  
    val = itemStock.values.uniq == [true]

    #si hay inventario suficiente se crea la transaccion, de lo contrario se le avisa al usuario que item(s) no tienen suficiente
    #stock y se envia email a artree notificando la falta de stock de la foto.
    if val == true
      obj.each_pair do |photo, amount|
        photo.stock -= amount.to_i
        photo.save
      end    
      render json: {success: true} 
    else  
      noStock = []
      noStockName = []
      itemStock.each_pair do |item, available|
        noStock << item if available == false
      end
      noStock.each do |id|
        item = Photo.find(id)
        noStockName << item.name
        AdminMailer.with( email: "msantamaria86@gmail.com" , id:item.id, name: item.name, room: item.room.name).send_stock.deliver_later
      end
      render json: {success:false, msg: "Foto(s) sin inventario suficiente: #{noStockName}"}
    end
  end

  def correct_stock
    #API llamado en caso de que la transaccion falle y se necesite correjir el stock.
    items = params[:items][:products]  
    items.each do |product|
      photo = Photo.find(product["photo"]["id"])
      photo.stock +=product["quantity"]
      photo.save
    end
  end

  def test_mail
    AdminMailer.with( email:"msantamaria86@gmail.com" , id:1, cost: 10000).confirmation_mail.deliver_later
  end
  
  def payu_response
    #API tipo POST que utiliza payU para enviar resultados de la transaccion.
    full_string = request.raw_post
    puts "------raw_post---------#{full_string}"
    array = full_string.split("&")
    json = {}
    array.each do |item|
      i = item.split("=")
      json[i[0]]= i[1]
    end
    transaction = Transaction.find_by(ref_number: json["reference_sale"])
    transaction.status = json["response_message_pol"]
    transaction.last_4 = json["cc_number"][-4..-1]
    transaction.payment_id = json["transaction_id"]
    transaction.payment_method = json["cardType"]
    transaction.civil_id = json["extra1"]
    transaction.save
    
    # API (aun en prueba) para enviarle correo al usuario en caso de compra exitosa, aun no implementado en WOMPI.
    if transaction.status == "APPROVED"
      email = json["email_buyer"].gsub("%40","@")
      puts "---------email----------#{email}"
      AdminMailer.with( email:email , id:transaction.payment_id, cost: transaction.total_cost).confirmation_mail.deliver_later
    end
    
    if json["error_message_bank"] != nil
      transaction.status_message = json["error_message_bank"]
      transaction.save   
    end
    
    render json: { result: "transaction updated" }, status: 200
  end

  
  def wompi_response
    #API tipo POST que utiliza WOMPI para enviar resultados de la transaccion.
    json = params[:data][:transaction]

    transaction = Transaction.find_by(ref_number: json["reference"])
    transaction.status = json["status"]
    transaction.last_4 = json["payment_method"]["extra"]["last_four"]
    transaction.payment_id = json["id"]
    transaction.payment_method = json["payment_method"]["type"]
    transaction.civil_id = json["customer_data"]["legal_id"]
    transaction.save
    
    if json["status_message"] != nil
      transaction.status_message = json["status_message"]
      transaction.save   
    end   
    render json: { result: "transaction updated" }, status: 200
  end
  
  
  def result
    #pagina a la que redirigen payU y WOMPI tras regresar al website despues del pago.
    params[:transactionId]?   
    @transaction = Transaction.find_by(payment_id: params[:transactionId])
    :
    @transaction = Transaction.find_by(payment_id: params[:id])
    
    if !current_user || @transaction.user != current_user
      redirect_to "/", notice: "solo el usuario creador de esta transaccion puede acceder"
    end
  end

  private
    def set_transaction
      @transaction = Transaction.find(params[:id])
    end
    
    def transaction_params
      params.require(:transaction).permit(:products, :total_cost)
    end
end
