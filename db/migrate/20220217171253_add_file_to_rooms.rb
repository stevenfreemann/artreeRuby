class AddFileToRooms < ActiveRecord::Migration[6.0]
  def change
    add_column :rooms, :file, :string
  end
end
