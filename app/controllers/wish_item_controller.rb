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

  def get_info
    #para evitar informacion importante en el localstorage, se envian solo ids, este API completa la informacion de cada dato.
    #se llama directamente desde el carro de compras.
    
      size = Size.find(params["size"])
      photo = Photo.find(params["photo"])
      package = Package.find(params["packing"])
      frame = SubMaterial.find(params["frame"])
      material = SubMaterial.find(params["material"])
      reference = params["reference"]
    render json: {size: size, photo:photo, package: package, frame:frame, material:material, reference: reference, quantity: 1}    
  end

  def create
    if current_user
      @wish_item = WishItem.new
      @wish_item.user = current_user
      @wish_item.sizes.push(Size.find(params[:size]))
      @wish_item.packages.push(Package.find(params[:packing]))
      arr = SubMaterial.where(id: [params[:material], params[:frame]])
      @wish_item.sub_materials.push(arr[0], arr[1]) 

      @wish_item.photos.push(Photo.find(params[:photo]))
      if @wish_item.save 
        render json: {success:true, msg: "Agregado a wishlist"}    
      end
    else
      render json: {msg: "Debes ingresar a la pagina para agregar items al wishlist"}
    end
  end

  def shoppingCart
   #render json: {msg: "Debes ingresar a la pagina para agregar items al wishlist"}
  end

  def destroy
    @wish_item = WishItem.find(params[:id])
    if @wish_item.destroy
      render json: {success:true, msg: "Item borrado de wishlist"}
    else
      render json: {success:false, msg: "Falla borrando"}
    end
  end
  

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_wish_item
    @wish_item = wish_item.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def wish_item_params
    params.permit(:authenticity_token, :frame, :size, :material, :photo, :package)
  end
end

