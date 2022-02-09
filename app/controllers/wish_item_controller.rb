class WishItemController < ApplicationController
  skip_before_action :verify_authenticity_token


  def index
    if current_user
      @products = []
      all = current_user.wish_items 
      all.each do |item| 
        @products << item.serialize
        puts "-------item----#{item.serialize}"
      end
    else
      puts "----------test--------"
      redirect_to new_user_session_path
    end
  end

  def create
    # @wish_item = WishItem.new(wish_item_params)
    @wish_item = WishItem.new
    @wish_item.user = current_user
    @wish_item.size = Size.find(params[:size])

    arr = SubMaterial.where(id: [[params[:material], params[:frame]])
    @wish_item.sub_materials.push(arr[0], arr[1]) 

    @wish_item.photo = Photo.find(params[:photo])
    #@wish_item.package = Package.find(params[:packing])
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
    params.permit(:authenticity_token, :frame, :size, :material, :photo, :packing)
  end
end

