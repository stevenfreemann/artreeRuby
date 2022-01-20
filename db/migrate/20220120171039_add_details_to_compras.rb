class AddDetailsToCompras < ActiveRecord::Migration[6.0]
  def change
    add_column :compras, :status, :string
    add_column :compras, :metodo_pago, :string
    add_column :compras, :ultimos_4, :integer
    add_column :compras, :transaction_id, :integer
    add_column :compras, :impuesto_iva, :float
    add_column :compras, :impuesto_consumo, :float
    add_column :compras, :cedula, :integer
    change_column :compras, :productos, :text, array:true, default: [], using: "(string_to_array(productos, ','))"
    
  end

end
