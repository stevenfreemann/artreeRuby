class CreateCompras < ActiveRecord::Migration[6.0]
  def change
    create_table :compras do |t|
      t.integer :numero_referencia, default: 1
      t.integer :costo_total
      t.string :productos

      t.timestamps
    end
  end
end
