class AddNullsToSizes < ActiveRecord::Migration[6.0]
  def change
    change_column_null(:sizes, :name, false)
    change_column_null(:sizes, :dimensions, false)
    change_column_null(:sizes, :description, false)
    change_column_null(:sizes, :price, false)
    change_column_null(:sizes, :line_id, false)

  end
end
