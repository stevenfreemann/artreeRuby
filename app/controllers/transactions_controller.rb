class TransactionsController < ApplicationController
  before_action :set_transaction, only: %i[ show edit update destroy ]

  # GET /transactions or /transactions.json
  def index
    @transactions = Transaction.all
  end

  # GET /transactions/1 or /transactions/1.json
  def show
  end

  # GET /transactions/new
  def new
    @transaction = Transaction.new
  end

  # GET /transactions/1/edit
  def edit
  end

  # POST /transactions or /transactions.json
  def create
    @transaction = Transaction.new(transaction_params)
    cost = params[:total_cost]
    iva = cost * 0.19
    consumo = cost * 0.08
    total_cost = cost + iva + consumo   
    @transaction = Transaction.new(products: params[:products], total_cost: (total_cost * 100) , iva_tax: (iva  * 100), consumption_tax: (consumo * 100), user: current_user)
    @transaction.save
    @transaction.ref_number = (DateTime.now.strftime("%d%m%Y")+(sprintf "%07d", @transaction.id))
    @transaction.save
       
    price = total_cost.to_s + "00"
    secret = "test_integrity_wi0bQa6UvC3a7trCM2uj7fgo1yBy5754"
    chain = @transaction.ref_number.to_s + price + "COP" + secret
    @transaction.signature = Digest::SHA2.hexdigest(chain)
    @transaction.save

    render json: @transaction.to_json
  end

  # PATCH/PUT /transactions/1 or /transactions/1.json
  def update
    respond_to do |format|
      if @transaction.update(transaction_params)
        format.html { redirect_to transaction_url(@transaction), notice: "transaction was successfully updated." }
        format.json { render :show, status: :ok, location: @transaction }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @transaction.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_transaction
      @transaction = Transaction.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def transaction_params
      params.require(:transaction).permit(:products, :total_cost)
    end
end
