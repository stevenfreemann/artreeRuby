class CreateTamanos < ActiveRecord::Migration[6.0]
  def change
    create_table :tamanos do |t|
      t.string :nombre
      t.string :dimensiones
      t.text :descripcion
      t.integer :precio

      t.timestamps
    end
  end
end
