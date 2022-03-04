class AddNullsToPhotos < ActiveRecord::Migration[6.0]
  def change
    change_column_null(:photos, :name, false)
    change_column_null(:photos, :description, false)
    change_column_null(:photos, :file, false)
    change_column_null(:photos, :base_price, false)
  end
end
