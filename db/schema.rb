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

ActiveRecord::Schema.define(version: 2021_05_31_151532) do

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

  create_table "artista", force: :cascade do |t|
    t.string "nombre"
    t.text "bio"
    t.string "facebook"
    t.string "instagram"
    t.string "pinterest"
    t.string "linkedin"
    t.boolean "destacado", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "banners", force: :cascade do |t|
    t.string "titulo"
    t.text "texto"
    t.string "pagina"
    t.string "enlace"
    t.string "enlace_texto"
    t.boolean "activo", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "color_marcos", force: :cascade do |t|
    t.string "nombre"
    t.string "color"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "empaques", force: :cascade do |t|
    t.string "nombre"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "fotos", force: :cascade do |t|
    t.string "referencia"
    t.bigint "artistum_id", null: false
    t.string "nombre"
    t.text "descripcion"
    t.integer "precio_base"
    t.integer "prioridad"
    t.boolean "activo", default: false
    t.boolean "destacado", default: false
    t.boolean "destacado_temporada", default: false
    t.bigint "linea_id", null: false
    t.string "color"
    t.integer "numero_actual"
    t.integer "stock"
    t.boolean "pineado", default: false
    t.bigint "sala_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["artistum_id"], name: "index_fotos_on_artistum_id"
    t.index ["linea_id"], name: "index_fotos_on_linea_id"
    t.index ["sala_id"], name: "index_fotos_on_sala_id"
  end

  create_table "lineas", force: :cascade do |t|
    t.string "nombre"
    t.text "descripcion"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "marco_colors", force: :cascade do |t|
    t.bigint "marco_id", null: false
    t.bigint "color_marco_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["color_marco_id"], name: "index_marco_colors_on_color_marco_id"
    t.index ["marco_id"], name: "index_marco_colors_on_marco_id"
  end

  create_table "marcos", force: :cascade do |t|
    t.string "nombre"
    t.text "descripcion"
    t.integer "precio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "material_disponibles", force: :cascade do |t|
    t.bigint "material_id", null: false
    t.bigint "foto_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["foto_id"], name: "index_material_disponibles_on_foto_id"
    t.index ["material_id"], name: "index_material_disponibles_on_material_id"
  end

  create_table "materials", force: :cascade do |t|
    t.string "nombre"
    t.text "descripcion"
    t.boolean "destacado", default: false
    t.integer "precio"
    t.boolean "marco", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "salas", force: :cascade do |t|
    t.string "name"
    t.boolean "pin", default: false
    t.string "linea"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "linea_id", null: false
    t.index ["linea_id"], name: "index_salas_on_linea_id"
  end

  create_table "tamano_disponibles", force: :cascade do |t|
    t.bigint "tamano_id", null: false
    t.bigint "foto_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["foto_id"], name: "index_tamano_disponibles_on_foto_id"
    t.index ["tamano_id"], name: "index_tamano_disponibles_on_tamano_id"
  end

  create_table "tamanos", force: :cascade do |t|
    t.string "nombre"
    t.string "dimensiones"
    t.text "descripcion"
    t.integer "precio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "temporadas", force: :cascade do |t|
    t.string "nombre"
    t.boolean "active", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.string "mobile2"
    t.string "document"
    t.string "mobile"
    t.integer "phone"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "fotos", "artista"
  add_foreign_key "fotos", "lineas"
  add_foreign_key "fotos", "salas"
  add_foreign_key "marco_colors", "color_marcos"
  add_foreign_key "marco_colors", "marcos"
  add_foreign_key "material_disponibles", "fotos"
  add_foreign_key "material_disponibles", "materials"
  add_foreign_key "salas", "lineas"
  add_foreign_key "tamano_disponibles", "fotos"
  add_foreign_key "tamano_disponibles", "tamanos"
end
