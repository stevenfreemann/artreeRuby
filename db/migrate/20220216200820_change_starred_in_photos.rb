class ChangeStarredInPhotos < ActiveRecord::Migration[6.0]
  def change
    remove_column :photos, :starred, :boolean
    remove_column :photos, :priority, :integer
    add_column :photos, :banner, :string, default: "NO"

  end
end
