class CreateMaterials < ActiveRecord::Migration[6.0]
  def change
    create_table :materials do |t|
      t.string :nombre
      t.text :descripcion
      t.boolean :destacado, default: false
      t.integer :precio
      t.boolean :marco, default: true

      t.timestamps
    end
  end
end
