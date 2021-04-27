class CreateLineas < ActiveRecord::Migration[6.0]
  def change
    create_table :lineas do |t|
      t.string :nombre
      t.text :descripcion

      t.timestamps
    end
  end
end
