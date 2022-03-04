class AddNullsToLines < ActiveRecord::Migration[6.0]
  def change
    change_column_null(:lines, :name, false)
    change_column_null(:lines, :description, false)
  end
end
