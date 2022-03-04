class CreateBanners < ActiveRecord::Migration[6.0]
  def change
    create_table "banners", force: :cascade do |t|
      t.string "title"
      t.text "text"
      t.string "page", default: "None"
      t.string "file"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end
  end
end


