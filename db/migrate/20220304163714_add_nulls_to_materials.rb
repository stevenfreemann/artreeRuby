class AddNullsToMaterials < ActiveRecord::Migration[6.0]
  def change
    change_column_null(:materials, :name, false)
    change_column_null(:materials, :file, false)
  end
end
