class CreateMaterialDisponibles < ActiveRecord::Migration[6.0]
  def change
    create_table :material_disponibles do |t|
      t.references :material, null: false, foreign_key: true
      t.references :foto, null: false, foreign_key: true

      t.timestamps
    end
  end
end
