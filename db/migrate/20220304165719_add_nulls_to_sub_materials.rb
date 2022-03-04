class AddNullsToSubMaterials < ActiveRecord::Migration[6.0]
  def change
    change_column_null(:sub_materials, :name, false)
    change_column_null(:sub_materials, :description, false)
    change_column_null(:sub_materials, :file, false)
    change_column_null(:sub_materials, :price, false)

  end
end
