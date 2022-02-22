class AdminMailer < ApplicationMailer
  def send_pass
    mail(to: params[:email],
      subject: 'email subject',
      body: 'email body',
      delivery_method_options: {
        api_key: ENV["SENDGRID"]
      },
      template_id: 'd-d4e369637b2243078d3545b203c3b70a',
      dynamic_template_data:{
        'pass': params[:pass]
      }
    )
  end
end
