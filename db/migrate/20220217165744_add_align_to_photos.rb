class AddAlignToPhotos < ActiveRecord::Migration[6.0]
  def change
    add_column :photos, :align, :string
  end
end
