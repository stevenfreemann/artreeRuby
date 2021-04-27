class CreateArtista < ActiveRecord::Migration[6.0]
  def change
    create_table :artista do |t|
      t.string :nombre
      t.text :bio
      t.string :facebook
      t.string :instagram
      t.string :pinterest
      t.string :linkedin
      t.boolean :destacado, default: false

      t.timestamps
    end
  end
end
