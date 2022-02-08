class ApplicationController < ActionController::Base
    before_action :configure_permitted_parameters, if: :devise_controller?
    protected
    before_action :get_wishitem_by_header
    helper_method :init

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :mobile, :mobile2, :phone, :document])
    end

    private
    def get_wishitem_by_header
        @wish_item_count = 0
        if current_user
            @wish_item_count = current_user.wish_items.count
        end
    end
end
