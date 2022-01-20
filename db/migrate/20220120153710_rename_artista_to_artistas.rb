class RenameArtistaToArtistas < ActiveRecord::Migration[6.0]
  def change
    rename_table :artista, :artistas
  end
end
