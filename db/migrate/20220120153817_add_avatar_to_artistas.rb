class AddAvatarToArtistas < ActiveRecord::Migration[6.0]
  def change
    add_column :artistas, :avatar, :string
  end
end
