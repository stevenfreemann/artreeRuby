class CreateSalas < ActiveRecord::Migration[6.0]
  def change
    create_table :salas do |t|
      t.string :name
      t.boolean :pin, default: false
      t.string :linea

      t.timestamps
    end
  end
end
