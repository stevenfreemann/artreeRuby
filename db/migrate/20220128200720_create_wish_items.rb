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
      add_reference :user, foreign_key: true
      add_reference :photo, foreign_key: true
      add_reference :sub_material, foreign_key: true
      add_reference :size, foreign_key: true
      add_reference :packing, foreign_key: true
      add_reference :frame, foreign_key: true
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end
  end
end
