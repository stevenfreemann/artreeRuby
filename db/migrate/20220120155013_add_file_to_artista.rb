class AddFileToArtista < ActiveRecord::Migration[6.0]
  def change
    add_column :artista, :file, :string
  end
end
