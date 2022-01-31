class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.text :bio
      t.string :file
      t.string :facebook
      t.string :instagram
      t.string :pinterest
      t.string :linkedin
      t.boolean :starred, default: false

      t.timestamps
    end
  end
end