class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.string :reference
      t.string :name
      t.text :description
      t.integer :base_price
      t.integer :priority
      t.boolean :active, default: false
      t.boolean :starred, default: false
      t.string :file 
      t.integer :stock
      t.references :line, null: false, foreign_key: true
      t.references :room, null: false, foreign_key: true
      t.references :artist, null: false, foreign_key: true
      t.references :wish_item, null: true, foreign_key: true
      t.timestamps
    end
  end
end