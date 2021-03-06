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

ActiveRecord::Schema.define(version: 2022_07_11_161204) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "btree_gin"
  enable_extension "btree_gist"
  enable_extension "citext"
  enable_extension "cube"
  enable_extension "dblink"
  enable_extension "dict_int"
  enable_extension "dict_xsyn"
  enable_extension "earthdistance"
  enable_extension "fuzzystrmatch"
  enable_extension "hstore"
  enable_extension "intarray"
  enable_extension "ltree"
  enable_extension "pg_stat_statements"
  enable_extension "pg_trgm"
  enable_extension "pgcrypto"
  enable_extension "pgrowlocks"
  enable_extension "pgstattuple"
  enable_extension "plpgsql"
  enable_extension "tablefunc"
  enable_extension "unaccent"
  enable_extension "uuid-ossp"
  enable_extension "xml2"

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
    t.string "name", null: false
    t.text "bio", null: false
    t.string "file", null: false
    t.string "facebook"
    t.string "instagram"
    t.string "pinterest"
    t.string "linkedin"
    t.boolean "starred", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "banners", force: :cascade do |t|
    t.string "title", null: false
    t.text "text", null: false
    t.string "page", default: "None"
    t.string "file", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "lines", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image_index"
  end

  create_table "materials", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name", null: false
    t.string "file", null: false
  end

  create_table "packages", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "wish_item_id"
    t.integer "price", default: 0
    t.boolean "active", default: true
    t.index ["wish_item_id"], name: "index_packages_on_wish_item_id"
  end

  create_table "packages_wish_items", id: false, force: :cascade do |t|
    t.bigint "wish_item_id", null: false
    t.bigint "package_id", null: false
  end

  create_table "photos", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.integer "base_price", null: false
    t.boolean "active", default: true
    t.string "file", null: false
    t.integer "stock", default: 1000
    t.bigint "line_id", null: false
    t.bigint "room_id", null: false
    t.bigint "artist_id", null: false
    t.bigint "wish_item_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["artist_id"], name: "index_photos_on_artist_id"
    t.index ["line_id"], name: "index_photos_on_line_id"
    t.index ["room_id"], name: "index_photos_on_room_id"
    t.index ["wish_item_id"], name: "index_photos_on_wish_item_id"
  end

  create_table "photos_wish_items", id: false, force: :cascade do |t|
    t.bigint "wish_item_id", null: false
    t.bigint "photo_id", null: false
  end

  create_table "rooms", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.float "top_vertical", default: 0.0
    t.float "left_vertical", default: 0.0
    t.string "file", null: false
    t.string "space_vertical", null: false
    t.boolean "pinned", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "line_id", null: false
    t.string "space_horizontal", null: false
    t.float "top_horizontal", default: 0.0
    t.float "left_horizontal", default: 0.0
    t.index ["line_id"], name: "index_rooms_on_line_id"
  end

  create_table "sizes", force: :cascade do |t|
    t.string "name", null: false
    t.string "dimensions", null: false
    t.text "description", null: false
    t.integer "price", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "wish_item_id"
    t.string "file"
    t.bigint "line_id", null: false
    t.boolean "active", default: true
    t.index ["line_id"], name: "index_sizes_on_line_id"
    t.index ["wish_item_id"], name: "index_sizes_on_wish_item_id"
  end

  create_table "sizes_wish_items", id: false, force: :cascade do |t|
    t.bigint "wish_item_id", null: false
    t.bigint "size_id", null: false
  end

  create_table "sub_materials", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.boolean "starred", default: false
    t.integer "price", null: false
    t.integer "stock"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "material_id", null: false
    t.bigint "wish_item_id"
    t.string "file", null: false
    t.boolean "active", default: true
    t.index ["material_id"], name: "index_sub_materials_on_material_id"
    t.index ["wish_item_id"], name: "index_sub_materials_on_wish_item_id"
  end

  create_table "sub_materials_wish_items", id: false, force: :cascade do |t|
    t.bigint "wish_item_id", null: false
    t.bigint "sub_material_id", null: false
  end

  create_table "texts", force: :cascade do |t|
    t.string "name", null: false
    t.text "content", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "scope"
  end

  create_table "transactions", force: :cascade do |t|
    t.bigint "ref_number", default: 1
    t.integer "total_cost"
    t.text "products"
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
    t.string "status_message"
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_transactions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "name"
    t.string "last_name"
    t.string "mobile_phone"
    t.string "mobile_phone2"
    t.text "addresses", default: [], array: true
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "wish_items", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_wish_items_on_user_id"
  end

  add_foreign_key "packages", "wish_items"
  add_foreign_key "photos", "artists"
  add_foreign_key "photos", "lines"
  add_foreign_key "photos", "rooms"
  add_foreign_key "photos", "wish_items"
  add_foreign_key "rooms", "lines"
  add_foreign_key "sizes", "lines"
  add_foreign_key "sizes", "wish_items"
  add_foreign_key "sub_materials", "materials"
  add_foreign_key "sub_materials", "wish_items"
  add_foreign_key "transactions", "users"
  add_foreign_key "wish_items", "users"
end
