class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table "transactions", force: :cascade do |t|
      t.bigint "ref_number", default: 1
      t.integer "total_cost"
      t.text "products", default: [], array: true
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.string "status"
      t.string "payment_method"
      t.integer "last_4"
      t.integer "transaction_id"
      t.float "iva_tax"
      t.float "consumption_tax"
      t.integer "civil_id"
      t.bigint "user_id"
      t.string "signature"
      t.string "status_message"
      t.references :user, null: false, foreign_key: true
    end
  end
end
