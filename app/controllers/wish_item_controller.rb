class WishItemController < ApplicationController
  def index
    if current_user
      @products = current_user.wish_items 
    else
      redirect_to new_user_session_path
    end
  end

  def create
    @wish_item = WishItem.new(wish_item_params)
    @wish_item.frame = params[:frame]
    @wish_item.size = params[:size]
    @wish_item.sub_material = params[:sub_material]
    @wish_item.photo = params[:photo]
    @wish_item.package = params[:package]
    @wish_item.user = current_user
    if @wish_item.save 
      flash.alert = "Agregado a wishlist"
    end
  end

  def shoppingCart   
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_wish_item
    @wish_item = wish_item.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def wish_item_params
    params.require(:wish_item).permit(:user, :frame, :size, :sub_material, :photo, :package)
  end
end

