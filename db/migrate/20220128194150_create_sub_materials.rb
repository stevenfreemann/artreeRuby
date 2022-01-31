class CreateSubMaterials < ActiveRecord::Migration[6.0]
  def change
    create_table "sub_materials", force: :cascade do |t|
      t.string "name"
      t.text "description"
      t.boolean "starred", default: false
      t.integer "price"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.references :material, null: false, foreign_key: true
      t.references :wish_item, null: true, foreign_key: true
    end
  end
end
