class CreateMaterials < ActiveRecord::Migration[6.0]
  def change
    create_table "materials", force: :cascade do |t|
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.string "name"
      t.string "kind"
    end
  end
end
