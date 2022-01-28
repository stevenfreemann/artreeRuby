class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.string :reference
      t.references :artist, null: false, foreign_key: true
      t.string :name
      t.text :description
      t.integer :base_price
      t.integer :priority
      t.boolean :active, default: false
      t.boolean :starred, default: false
      t.string :file 
      t.references :line, null: false, foreign_key: true
      t.integer :stock
      t.references :room, null: false, foreign_key: true

      t.timestamps
    end
  end
end