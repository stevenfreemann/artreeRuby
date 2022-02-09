class DropFramesTable < ActiveRecord::Migration[6.0]
  def up
    drop_table :frames
  end
  
  def down
    create_table "frames", force: :cascade do |t|
      t.string "name"
      t.text "description"
      t.integer "price"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.references :wish_item, null: true, foreign_key: true
    end
  end
end