class CreateJoinTableWishItemsSubMaterials < ActiveRecord::Migration[6.0]
  def change
    create_join_table :wish_items, :sub_materials do |t|
      # t.index [:wish_item_id, :sub_material_id]
      # t.index [:sub_material_id, :wish_item_id]
    end
  end
end
