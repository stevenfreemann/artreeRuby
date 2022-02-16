class TransactionsController < ApplicationController
  before_action :set_transaction, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token
  require "http"
  

  def index
    @transactions = Transaction.all
  end
  
  def show
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
      end
    else
      noStock = []
      noStockName = []
      itemStock.each_pair do |item, available|
        noStock << item if available == false
      end
      noStock.each do |id|
        obj = {}
        item = Size.find(id)
        obj[item.name] = item.dimensions
        noStockName << obj
      end
      render json: "Tamaños sin inventario suficiente: #{noStockName}"
    end
    # render json: {success: true, objs:res} if val
  end


  def correct_stock
    transaction= params[:transaction]
    transaction.products.each do |product|
      photo = product.photo
      photo.stock += 1
      photo.save
      console.log(photo.stock) 
    end
  end
  
  def create
    @transaction = Transaction.new(transaction_params)
    cost = params[:total_cost]
    iva = cost * 0.19
    consumo = cost * 0.08
    total_cost = cost + iva + consumo   
    @transaction = Transaction.new(products: params[:products], total_cost: (total_cost * 100) , iva_tax: (iva  * 100), consumption_tax: (consumo * 100), user: current_user)
    @transaction.save
    @transaction.ref_number = (DateTime.now.strftime("%d%m%Y")+(sprintf "%07d", @transaction.id))
    @transaction.save
    
    price = total_cost.to_s + "00"
    secret = "test_integrity_wi0bQa6UvC3a7trCM2uj7fgo1yBy5754"
    chain = @transaction.ref_number.to_s + price + "COP" + secret
    @transaction.signature = Digest::SHA2.hexdigest(chain)
    @transaction.save
    
    render json: @transaction.to_json
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
    @transaction = Transaction.find_by(transaction_id: "#{params[:id]}")
  end


  private
    def set_transaction
      @transaction = Transaction.find(params[:id])
    end
    
    def transaction_params
      params.require(:transaction).permit(:products, :total_cost, ids: [])
    end
end
