class WishItemController < ApplicationController
  def show
    user = User.find(params[:id])
    @products = user.wish_items 
  end
end
