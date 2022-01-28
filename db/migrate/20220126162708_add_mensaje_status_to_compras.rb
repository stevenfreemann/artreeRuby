class AddMensajeStatusToCompras < ActiveRecord::Migration[6.0]
  def change
    add_column :compras, :mensaje_status, :string
  end
end
