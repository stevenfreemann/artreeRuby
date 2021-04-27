class CreateTamanoDisponibles < ActiveRecord::Migration[6.0]
  def change
    create_table :tamano_disponibles do |t|
      t.references :tamano, null: false, foreign_key: true
      t.references :foto, null: false, foreign_key: true

      t.timestamps
    end
  end
end
