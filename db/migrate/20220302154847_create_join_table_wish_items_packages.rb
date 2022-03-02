class CreateJoinTableWishItemsPackages < ActiveRecord::Migration[6.0]
  def change
    create_join_table :wish_items, :packages do |t|
      # t.index [:wish_item_id, :package_id]
      # t.index [:package_id, :wish_item_id]
    end
  end
end
