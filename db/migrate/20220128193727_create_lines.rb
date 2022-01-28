class CreateLines < ActiveRecord::Migration[6.0]
  def change
    create_table "lines", force: :cascade do |t|
      t.string "name"
      t.text "description"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end
  end
end
