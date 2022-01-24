class WishItemController < ApplicationController
  def index
    @products = current_user.wish_items 
  end
end
