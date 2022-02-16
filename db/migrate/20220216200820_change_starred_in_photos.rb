class ChangeStarredInPhotos < ActiveRecord::Migration[6.0]
  def change
    change_column(:photos, :starred, :integer)
    remove_column :sizes, :stock

  end
end
