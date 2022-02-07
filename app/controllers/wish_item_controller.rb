class WishItemController < ApplicationController
  skip_before_action :verify_authenticity_token


  def index
    if current_user
      @products = current_user.wish_items 
    else
      redirect_to new_user_session_path
    end
  end

  def create
    # @wish_item = WishItem.new(wish_item_params)
    @wish_item = WishItem.new
    @wish_item.frame = Frame.find(params[:frame])
    @wish_item.size = Size.find(params[:size])
    @wish_item.sub_material = SubMaterial.find(params[:material])
    @wish_item.photo = Photo.find(params[:photo])
    #@wish_item.package = Package.find(params[:packing])
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
    params.permit(:authenticity_token, :wish_item, :frame, :size, :material, :photo, :packing)
  end
end

