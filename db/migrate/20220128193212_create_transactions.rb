class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table "transactions", force: :cascade do |t|
      t.bigint "ref_number", default: 1
      t.integer "total_cost"
      t.text "products", default: [], array: true
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.string "status", default: "transaccion en proceso"
      t.string "payment_method", default: "transaccion en proceso"
      t.string "last_4", default: "transaccion en proceso"
      t.string "payment_id", default: "transaccion en proceso"
      t.float "iva_tax"
      t.float "consumption_tax"
      t.integer "civil_id"
      t.string "payu_sign"
      t.string "wompi_sign"
      t.string "status_message", default: "transaccion en proceso"
      t.references :user, null: false, foreign_key: true
    end
  end
end
