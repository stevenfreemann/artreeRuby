class AdminMailer < ApplicationMailer
  def send_stock
    mail(to: params[:email],
      subject: 'Foto sin inventario',
      body: 'email body',
      delivery_method_options: {
        api_key: ENV["SENDGRID"]
      },
      template_id: 'd-aa022c1aa937474298016317b991967e',
      dynamic_template_data:{
        'id': params[:id],
        'name': params[:name],
        'room': params[:room]
      }
    )
  end
end
