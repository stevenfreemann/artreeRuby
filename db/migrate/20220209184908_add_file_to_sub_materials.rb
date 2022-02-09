class AddFileToSubMaterials < ActiveRecord::Migration[6.0]
  def change
    add_column :sub_materials, :file, :string
  end
end
