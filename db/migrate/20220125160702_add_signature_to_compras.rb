class AddSignatureToCompras < ActiveRecord::Migration[6.0]
  def change
    add_column :compras, :firma, :string
  end
end
