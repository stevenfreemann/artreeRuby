module API
    module V1
      class Artistas < Grape::API
        include API::V1::Defaults
        resource :artistas do
          desc "Return all users"
          get "", base: :artistas, each_serializer: ArtistasSerializer do
            Artistum.all  
          end
          desc "Return a user"
          params do
            requires :id, type: String, desc: "ID of the user"
          end
          get ":id" do
            Artistum.where(id: permitted_params[:id]).first!
          end
        end
      end
    end
  end