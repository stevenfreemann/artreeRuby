class CreateBanners < ActiveRecord::Migration[6.0]
  def change
    create_table "banners", force: :cascade do |t|
      t.string "title"
      t.text "text"
      t.string "page"
      t.string "link"
      t.string "text_link"
      t.boolean "active", default: false
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end
  end
end


