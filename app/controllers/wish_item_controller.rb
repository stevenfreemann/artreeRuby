class WishItemController < ApplicationController
  def index
    if current_user
      @products = current_user.wish_items 
    else
      redirect_to new_user_session_path
    end
  end
end
