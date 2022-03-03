class TransactionsController < ApplicationController
  before_action :set_transaction, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token
  require "http"
  
  
  def index
    @transactions = Transaction.all
  end
  
  def show
  end
  
  def create
    #params.permit!
    cost = params[:total_cost]
    iva = cost * 0.19
    consumo = cost * 0.08
    total_cost = cost + iva + consumo
    items = (params[:products])
    items.each do |item|
      #puts "------item--------#{item}"
    end
  
    @transaction = Transaction.new(products: items, total_cost: (total_cost) , iva_tax: (iva), consumption_tax: (consumo), user: current_user)
    
    @transaction.save
    @transaction.ref_number = (DateTime.now.strftime("%d%m%Y")+(sprintf "%07d", @transaction.id))
    @transaction.save
    
    price = total_cost.to_s + "00"
    secret = "test_integrity_wi0bQa6UvC3a7trCM2uj7fgo1yBy5754"
    wompi_chain = @transaction.ref_number.to_s + price + "COP" + secret
    @transaction.wompi_sign = Digest::SHA2.hexdigest(wompi_chain)

    payu_chain = "4Vj8eK4rloUd272L48hsrarnUA~508029~#{@transaction.ref_number}~#{@transaction.total_cost}~COP"
    @transaction.payu_sign = Digest::MD5.hexdigest(payu_chain)
    @transaction.save
    
    render json: @transaction #enviar serializado con parseo e itereador
  end
  
  def stock
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
    items = params[:items][:products]
    # puts "-----items---------#{params[:items][:products]}"
    items.each do |product|
      item = eval(product)
      puts "-----item---------#{item}"
      stock = item["photo"]["stock"]
      puts "--------pre-stock----------#{photo}"
      stock += product["quantity"]
      photo.save
      puts "--------pos-stock----------#{photo}"
    end
  end
  
  def payu_response
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

    if json["error_message_bank"] != nil
      transaction.status_message = json["error_message_bank"]
      transaction.save   
    end  
    render json: { result: "transaction updated" }, status: 200
  end


  def wompi_response
    origin = request.headers
    puts "------origin-------#{origin.to_json}"
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
