SMTP_SETTINGS = {
  user_name: 'apikey', # This is the string literal 'apikey', NOT the ID of your API key
  password: ENV["SENDGRID"], # This is the secret sendgrid API key which was issued during API key creation
  domain: 'artree-shop.herokuapp.com',
  address: 'smtp.sendgrid.net',
  port: 587,
  authentication: "plain",
  enable_starttls_auto: true
}.freeze
