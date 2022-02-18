class AddActiveToSubMaterials < ActiveRecord::Migration[6.0]
  def change
    add_column :sub_materials, :active, :boolean, default: true
  end
end
