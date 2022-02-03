class CreateWishItems < ActiveRecord::Migration[6.0]
  def change
    create_table "wish_items", force: :cascade do |t|
      t.references :user, null: false, foreign_key: true
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end
  end
end
