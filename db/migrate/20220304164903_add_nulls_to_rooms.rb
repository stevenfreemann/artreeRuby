class AddNullsToRooms < ActiveRecord::Migration[6.0]
  def change
    change_column_null(:rooms, :name, false)
    change_column_null(:rooms, :description, false)
    change_column_null(:rooms, :space_horizontal, false)
    change_column_null(:rooms, :space_vertical, false)
    change_column_null(:rooms, :file, false)
  end
end
