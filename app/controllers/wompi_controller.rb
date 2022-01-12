class WompiController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: @data
  end

  def receive
    @data = params.as_json
    puts "params"
    puts "---------------#{@data}"


    redirect_to wompi_index
    # if request.headers['Content-Type'] == 'application/json'
    #   @data = JSON.parse(request.body.read)
    # else
      # application/x-www-form-urlencoded
    # end

    #Webhook::Received.save(data: data, integration: params[:integration_name])
  end
end
