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
    params.permit!
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
    chain = @transaction.ref_number.to_s + price + "COP" + secret
    payu_chain = "4Vj8eK4rloUd272L48hsrarnUA~508029~#{@transaction.ref_number}~#{@transaction.total_cost}~COP"
    #@transaction.signature = Digest::SHA2.hexdigest(chain)
    @transaction.signature = Digest::MD5.hexdigest(payu_chain)
    @transaction.save
    
    render json: @transaction #enviar serializado con parseo e itereador
  end
  
  def stock
    # puts "---------params-------#{params[:ids]}"
    res = params[:ids]
    itemStock = {}
    obj = {}
    # all_sizes = params[:ids].split(",")
    res.each_pair do |id, amount|
      photo = Photo.find(id)
      obj[photo] = amount
      available = photo.stock >= amount.to_i ? true : false
      itemStock[id] = available
    end  
    puts "---------itemStock----------#{itemStock}"

    val = itemStock.values.uniq == [true]
    if val == true

      obj.each_pair do |photo, amount|
        photo.stock -= amount.to_i
        photo.save
       # puts "---------photo----#{photo.id}"
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
    items = params[:products]
    puts "-----items---------#{items}"
    items.each do |product|
      puts "-----product---------#{product}"
      #item = JSON.parse(product)
      photo = product.photo
      photo.stock += product.quantity
      photo.save
    end
  end
  
  def payu_response
    full_string = request.raw_post
    array = full_string.split("&")
    json = {}
    array.each do |item|
      i = item.split("=")
      json[i[0]]= i[1]
    end

    transaction = Transaction.find_by(ref_number: json["reference_sale"])
    transaction.status = json["response_message_pol"]
    transaction.last_4 = json["cc_number"][-4..-1]
    transaction.transaction_id = json["transaction_id"]
    transaction.payment_method = json["cardType"]
    transaction.civil_id = json["extra1"]
    transaction.save

    if json["error_message_bank"] != nil
      transaction.status_message = json["error_message_bank"]
      transaction.save
      
      render json: { result: "transaction updated" }, status: 200
    end  
  end


  def wompi_response
    json = params[:data][:transaction]

    transaction = Transaction.find_by(ref_number: json["reference"])
    transaction.status = json["status"]
    transaction.last_4 = json["payment_method"]["extra"]["last_four"]
    transaction.transaction_id = json["id"]
    transaction.payment_method = json["payment_method"]["type"]
    transaction.civil_id = json["customer_data"]["legal_id"]
    transaction.save
    
    if json["status_message"] != nil
      transaction.status_message = json["status_message"]
      transaction.save
      
      render json: { result: "transaction updated" }, status: 200
    end   
  end
  
  
  def result
    validate = ['DECLINED', 'ERROR']
    @transaction = Transaction.find_by(transaction_id: params[:transactionId])
    puts "------transaction-----------#{@transaction.transaction_id}"
    if validate.include?(@transaction.status)
      redirect_to failure_path(transaction: @transaction.id)
    else
      redirect_to success_path(transaction: @transaction.id)
    end
  end

  def failure
    transaction = Transaction.find(params[:transaction])
    @products = transaction.products[0]
    @status = transaction.status_message
    puts "----------_#{@products}"
  end

  def success
    transaction = Transaction.find(params[:transaction])
    puts "------transaction-----------#{transaction.id}"

  end

  private
    def set_transaction
      @transaction = Transaction.find(params[:id])
    end
    
    def transaction_params
      params.require(:transaction).permit(:products, :total_cost)
    end
end
