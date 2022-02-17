class AddVerticalToRooms < ActiveRecord::Migration[6.0]
  def change
    add_column :rooms, :space_horizontal, :string
    rename_column :rooms, :space, :space_vertical

  end
end
