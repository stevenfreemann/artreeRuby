
class WompiController < ApplicationController
  skip_before_action :verify_authenticity_token
  require "http"

  def index
    puts "---------------#{params}"
    #render json: params[:test]
    render json: params[:data]
  end

  def transaction
    id = params[:id]
    response = HTTP.get("https://production.wompi.co/v1/transactions/#{id}")
    render json: response
  



    # @data = params.as_json
    # #@data = {test: '1234'}
    # redirect_to wompi_index_path(params: @data)

    # if request.headers['Content-Type'] == 'application/json'
    #   @data = JSON.parse(request.body.read)
    # else
      # application/x-www-form-urlencoded
    # end

    #Webhook::Received.save(data: data, integration: params[:integration_name])
  end
end
