module API
    module V1
      class Users < Grape::API
        include API::V1::Defaults
        resource :users do
            desc "Create User"
            params do
                requires :name, type:String
                requires :email, type:String
                requires :mobile, type:String
                requires :mobile2, type:String
                requires :password, type:String
                requires :password_confirmation, type:String
            end
            post do
               usuario = User.create!({name:params[:name], mobile:params[:mobile], email:params[:email], 
                    mobile2:params[:mobile2], password:params[:password], password_confirmation:params[:password_confirmation]})
                puts "usuario es"
                puts usuario.to_json
            end
          end
        end
      end
    end