class CreateWishItems < ActiveRecord::Migration[6.0]
  def change
    create_table :wish_items do |t|
      t.string :name
      t.string :phrase
      t.string :dimensions
      t.string :frame
      t.string :material
      t.integer :price
      t.string :group
      t.string :img

      t.timestamps
    end
  end
end
