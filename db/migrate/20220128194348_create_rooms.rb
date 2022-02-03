class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table "rooms", force: :cascade do |t|
      t.string "name"
      t.text "description"
      t.boolean "pinned", default: false
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.references :line, null: false, foreign_key: true
    end
  end
end
