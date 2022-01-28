class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table "rooms", force: :cascade do |t|
      t.string "name"
      t.boolean "pinned", default: false
      t.string "line"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.bigint "line_id", null: false
      t.index ["line_id"], name: "index_rooms_on_line_id"
    end
  end
end
