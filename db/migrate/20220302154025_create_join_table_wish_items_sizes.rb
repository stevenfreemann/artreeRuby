class CreateJoinTableWishItemsSizes < ActiveRecord::Migration[6.0]
  def change
    create_join_table :wish_items, :sizes do |t|
      # t.index [:wish_item_id, :size_id]
      # t.index [:size_id, :wish_item_id]
    end
  end
end
