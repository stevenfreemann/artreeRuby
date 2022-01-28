class CreateWishItems < ActiveRecord::Migration[6.0]
  def change
    create_table "wish_items", force: :cascade do |t|
      t.string "name"
      t.string "phrase"
      t.string "dimensions"
      t.string "frame"
      t.string "material"
      t.integer "price"
      t.string "img"
      t.bigint "line_id", null: false
      t.bigint "user_id", null: false
      t.bigint "photo_id", null: false
      t.bigint "sub_material_id", null: false
      t.bigint "size_id", null: false
      t.bigint "packing_id", null: false
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.index ["line_id"], name: "index_wish_items_on_line_id"
      t.index ["user_id"], name: "index_wish_items_on_user_id"
      t.index ["photo_id"], name: "index_wish_items_on_photo_id"
      t.index ["sub_material_id"], name: "index_wish_items_on_sub_material_id"
      t.index ["size_id"], name: "index_wish_items_on_size_id"
      t.index ["packing_id"], name: "index_wish_items_on_packing_id"
    end
  end
end
