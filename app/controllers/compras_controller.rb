class ComprasController < ApplicationController
  before_action :set_compra, only: %i[ show edit update destroy ]

  # GET /compras or /compras.json
  def index
    @compras = Compra.all
  end

  # GET /compras/1 or /compras/1.json
  def show
  end

  # GET /compras/new
  def new
    @compra = Compra.new
  end

  # GET /compras/1/edit
  def edit
  end

  # POST /compras or /compras.json
  def create
    costo = params[:costo]
    iva = costo * 0.19
    consumo = costo * 0.08
    costo_total = costo + iva + consumo   
    puts costo_total
    @compra = Compra.new(productos: params[:productos], costo_total: (costo_total * 100) , impuesto_iva: (iva  * 100), impuesto_consumo: (consumo * 100), user: current_user)
    @compra.save
    @compra.numero_referencia = (DateTime.now.strftime("%d%m%Y")+(sprintf "%07d", @compra.id))
    @compra.save

    price = costo_total.to_s + "00"
    secret = "test_integrity_wi0bQa6UvC3a7trCM2uj7fgo1yBy5754"
    chain = @compra.numero_referencia.to_s + price + "COP" + secret
    @compra.firma = Digest::SHA2.hexdigest(chain)
    @compra.save

    render json: @compra.to_json
  end

  def update
    respond_to do |format|
      if @compra.update(compra_params)
        format.html { redirect_to compra_url(@compra), notice: "Compra was successfully updated." }
        format.json { render :show, status: :ok, location: @compra }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @compra.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /compras/1 or /compras/1.json
  def destroy
    @compra.destroy

    respond_to do |format|
      format.html { redirect_to compras_url, notice: "Compra was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_compra
      @compra = Compra.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def compra_params
      params.require(:compras).permit(:numero_referencia, :productos, :costo_total)
    end
end
