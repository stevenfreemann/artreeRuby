class CreateFotos < ActiveRecord::Migration[6.0]
  def change
    create_table :fotos do |t|
      t.string :referencia
      t.references :artistum, null: false, foreign_key: true
      t.string :nombre
      t.text :descripcion
      t.integer :precio_base
      t.integer :prioridad
      t.boolean :activo, default: false
      t.boolean :destacado, default: false
      t.boolean :destacado_temporada, default: false
      t.references :linea, null: false, foreign_key: true
      t.string :color
      t.integer :numero_actual
      t.integer :stock
      t.boolean :pineado, default: false
      t.references :sala, null: false, foreign_key: true

      t.timestamps
    end
  end
end
