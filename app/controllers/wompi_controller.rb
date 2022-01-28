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

    @compra = Compra.find_by(numero_referencia: json["data"]["reference"])
    @compra.status = json["data"]["status"]
    @compra.ultimos_4 = json["data"]["payment_method"]["extra"]["last_four"]
    @compra.transaction_id = json["data"]["id"]
    @compra.metodo_pago = json["data"]["payment_method"]["type"]
    @compra.cedula = json['data']['merchant']['legal_id']
    @compra.save

    if json["data"]["status_message"] != nil
      @compra.mensaje_status = json["data"]["status_message"]
      @compra.save
    end

  end
end
