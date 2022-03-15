class AdminMailer < ApplicationMailer
  def send_stock
    mail(to: params[:email],
      subject: 'Foto sin inventario',
      body: 'email body',
      delivery_method_options: {
        api_key: ENV["SENDGRID_API"]
      },
      template_id: 'd-aa022c1aa937474298016317b991967e',
      dynamic_template_data:{
        'id': params[:id],
        'name': params[:name],
        'room': params[:room]
      }
    )
  end

  def confirmation_mail
    mail(to: params[:email],
      subject: 'ARTREE: compra exitosa',
      body: 'email body',
      delivery_method_options: {
        api_key: ENV["SENDGRID_API"]
      },
      template_id: 'd-1021a16ff60649299c77e0f7ec39c818',
      dynamic_template_data:{
        'id': params[:id],
        'cost': params[:cost]
      }
    )
  end
end
