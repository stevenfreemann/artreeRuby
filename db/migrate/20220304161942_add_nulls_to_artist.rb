class AddNullsToArtist < ActiveRecord::Migration[6.0]
  def change
    change_column_null(:artists, :name, false)
    change_column_null(:artists, :bio, false)
    change_column_null(:artists, :file, false)
  end
end
