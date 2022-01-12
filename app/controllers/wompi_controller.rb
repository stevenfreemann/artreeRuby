class WompiController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    puts "---------------#{@data}"
    render json: @data
  end

  def receive
    @data = params.as_json


    redirect_to wompi_index_url(@data)
    # if request.headers['Content-Type'] == 'application/json'
    #   @data = JSON.parse(request.body.read)
    # else
      # application/x-www-form-urlencoded
    # end

    #Webhook::Received.save(data: data, integration: params[:integration_name])
  end
end
