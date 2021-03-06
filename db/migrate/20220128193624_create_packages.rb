class CreatePackages < ActiveRecord::Migration[6.0]
  def change
    create_table "packages", force: :cascade do |t|
      t.string "name"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.references :wish_item, null: true, foreign_key: true
    end
  end
end
