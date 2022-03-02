class CreateJoinTableWishItemsPhotos < ActiveRecord::Migration[6.0]
  def change
    create_join_table :wish_items, :photos do |t|
      # t.index [:wish_item_id, :photo_id]
      # t.index [:photo_id, :wish_item_id]
    end
  end
end
