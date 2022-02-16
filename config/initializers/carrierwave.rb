CarrierWave.configure do |config|
  config.fog_credentials = {
    provider:              'AWS',                        # required
    aws_access_key_id:     ENV["AWS_ACCESS_KEY_ID"],
    aws_secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"],                        # required unless using use_iam_profile
    #use_iam_profile:       true,                         # optional, defaults to false
    region:                'us-east-1',                  # optional, defaults to 'us-east-1'
  #   host:                  's3.example.com',             # optional, defaults to nil
  #   endpoint:              'https://s3.example.com:8080' # optional, defaults to nil
   }
  config.fog_directory  = 'artree-new'                                      # required
  config.fog_public     = true                                                 # optional, defaults to true
  config.fog_attributes = { cache_control: "public, max-age=#{365.days.to_i}" } # optional, defaults to {}
  # For an application which utilizes multiple servers but does not need caches persisted across requests,
  # uncomment the line :file instead of the default :storage.  Otherwise, it will use AWS as the temp cache store.
  # config.cache_storage = :file
end