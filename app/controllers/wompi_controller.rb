class WompiController < ApplicationController
  skip_before_action :verify_authenticity_token
  require "http"

  def transaction
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
  end
end
