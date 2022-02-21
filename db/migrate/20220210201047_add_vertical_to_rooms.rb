class AddVerticalToRooms < ActiveRecord::Migration[6.0]
  def change
    add_column :rooms, :space_horizontal, :string
    add_column :rooms, :file, :string
    rename_column :rooms, :space, :space_vertical
    rename_column :rooms, :top, :top_vertical
    rename_column :rooms, :left, :left_vertical
    add_column :rooms, :top_horizontal, :float, default: 0.0
    add_column :rooms, :left_horizontal, :float, default: 0.0
  end
end

