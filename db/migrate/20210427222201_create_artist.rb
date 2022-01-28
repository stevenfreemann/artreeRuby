class CreateArtist < ActiveRecord::Migration[6.0]
  def change
    create_table :artist do |t|
      t.string :name
      t.text :bio
      t.string :facebook
      t.string :instagram
      t.string :pinterest
      t.string :linkedin
      t.boolean :starred, default: false

      t.timestamps
    end
  end
end
