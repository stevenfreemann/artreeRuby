class AddImageIndexToLines < ActiveRecord::Migration[6.0]
  def change
    add_column :lines, :image_index, :string
  end
end
