class WompiController < ApplicationController
  skip_before_action :verify_authenticity_token
  require "http"

  def wompi_response
    json = params[:data]
    puts "-------------json--------------#{json}"
    
    transaction = Transaction.find_by(ref_number: json["transaction"]["reference"])
    
    transaction.status = json["transaction"]["status"]
    transaction.last_4 = json["transaction"]["payment_method"]["extra"]["last_four"]
    transaction.transaction_id = json["transaction"]["id"]
    puts "-------------id--------------#{json["transaction"]["id"]}"
    puts "-------------id--------------#{transaction.transaction_id}"

    transaction.payment_method = json["transaction"]["payment_method"]["type"]
    transaction.civil_id = json["transaction"]["customer_data"]["legal_id"]
    transaction.save
    
    if json["transaction"]["status_message"] != nil
      transaction.status_message = json["transaction"]["status_message"]
      transaction.save
      
      render json: { result: "transaction updated" }, status: 200
    end   
  end
  
  def result
    #response = HTTP.get("https://sandbox.wompi.co/v1/transactions/#{id}").to_s
    id = params[:id]
    puts "-------------id--------------#{params[:id]}"

    @transaction = Transaction.find_by(transaction_id: "#{params[:id]}")
    puts "--------------transaction-------------#{@transaction.transaction_id}"
  end
end


    # @paymentInfo = {
    #   status: json["data"]["status"],
    #   creditCard: json["data"]["payment_method"]["extra"]["last_four"],
    #   reference: json["data"]["reference"],
    #   transaction_id: json["data"]["id"],
    #   payment_type: json["data"]["payment_method"]["type"]
    # }
    
    
    # if json["data"]["status_message"] != nil
    #   @paymentInfo["status_message"] = json["data"]["status_message"]
    # end
    
    

