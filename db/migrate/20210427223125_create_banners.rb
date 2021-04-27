class CreateBanners < ActiveRecord::Migration[6.0]
  def change
    create_table :banners do |t|
      t.string :titulo
      t.text :texto
      t.string :pagina
      t.string :enlace
      t.string :enlace_texto
      t.boolean :activo, default: false

      t.timestamps
    end
  end
end
