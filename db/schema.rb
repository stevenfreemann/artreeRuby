# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_28_200720) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_type"
    t.bigint "resource_id"
    t.string "author_type"
    t.bigint "author_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "admin_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.text "bio"
    t.string "facebook"
    t.string "instagram"
    t.string "pinterest"
    t.string "linkedin"
    t.boolean "starred", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

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

  create_table "lines", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "materials", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.string "kind"
  end

  create_table "packages", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "photos", force: :cascade do |t|
    t.string "reference"
    t.bigint "artist_id", null: false
    t.string "name"
    t.text "description"
    t.integer "base_price"
    t.integer "priority"
    t.boolean "active", default: false
    t.boolean "starred", default: false
    t.string "file"
    t.bigint "line_id", null: false
    t.integer "stock"
    t.bigint "room_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["artist_id"], name: "index_photos_on_artist_id"
    t.index ["line_id"], name: "index_photos_on_line_id"
    t.index ["room_id"], name: "index_photos_on_room_id"
  end

  create_table "rooms", force: :cascade do |t|
    t.string "name"
    t.boolean "pinned", default: false
    t.string "line"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "line_id", null: false
    t.index ["line_id"], name: "index_rooms_on_line_id"
  end

  create_table "sizes", force: :cascade do |t|
    t.string "name"
    t.string "dimensions"
    t.text "description"
    t.integer "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sub_materials", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.boolean "starred", default: false
    t.integer "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

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
    t.index ["user_id"], name: "index_transactions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "wish_items", force: :cascade do |t|
    t.string "name"
    t.string "phrase"
    t.string "dimensions"
    t.string "frame"
    t.string "material"
    t.integer "price"
    t.string "img"
    t.bigint "line_id", null: false
    t.bigint "user_id", null: false
    t.bigint "photo_id", null: false
    t.bigint "sub_material_id", null: false
    t.bigint "size_id", null: false
    t.bigint "packing_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["line_id"], name: "index_wish_items_on_line_id"
    t.index ["packing_id"], name: "index_wish_items_on_packing_id"
    t.index ["photo_id"], name: "index_wish_items_on_photo_id"
    t.index ["size_id"], name: "index_wish_items_on_size_id"
    t.index ["sub_material_id"], name: "index_wish_items_on_sub_material_id"
    t.index ["user_id"], name: "index_wish_items_on_user_id"
  end

  add_foreign_key "photos", "artists"
  add_foreign_key "photos", "lines"
  add_foreign_key "photos", "rooms"
end
