class WompiController < ApplicationController
  skip_before_action :verify_authenticity_token
  require "http"

  def wompi_response
    id = params[:id]
    response = HTTP.get("https://sandbox.wompi.co/v1/transactions/#{id}").to_s
    json = JSON.parse(response)
      @paymentInfo = {
        status: json["data"]["status"],
        creditCard: json["data"]["payment_method"]["extra"]["last_four"],
        reference: json["data"]["reference"],
        transaction_id: json["data"]["id"],
        payment_type: json["data"]["payment_method"]["type"]
      }


    if json["data"]["status_message"] != nil
      @paymentInfo["status_message"] = json["data"]["status_message"]
    end

    @transaction = Transaction.find_by(ref_number: json["data"]["reference"])
    @transaction.status = json["data"]["status"]
    @transaction.last_4 = json["data"]["payment_method"]["extra"]["last_four"]
    @transaction.transaction_id = json["data"]["id"]
    @transaction.payment_method = json["data"]["payment_method"]["type"]
    @transaction.civil_id = json['data']['merchant']['legal_id']
    @transaction.save

    if json["data"]["status_message"] != nil
      @transaction.status_message = json["data"]["status_message"]
      @transaction.save
    end

  end
end
