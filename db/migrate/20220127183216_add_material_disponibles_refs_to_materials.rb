class AddMaterialDisponiblesRefsToMaterials < ActiveRecord::Migration[6.0]
  def change
    add_reference :materials, :material_disponible, index: true
  end
end
