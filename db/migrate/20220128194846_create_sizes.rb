class CreateSizes < ActiveRecord::Migration[6.0]
  def change
    create_table "sizes", force: :cascade do |t|
      t.string "name"
      t.string "dimensions"
      t.text "description"
      t.integer "price"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end
  end
end
