class AddNombreToMaterialDisponibles < ActiveRecord::Migration[6.0]
  def change
    add_column :material_disponibles, :nombre, :string
    add_column :material_disponibles, :tipo, :string
    remove_reference :material_disponibles, :material, index: true, foreign_key: true
    remove_reference :material_disponibles, :foto, index: true, foreign_key: true
  end
end