class AddLineaIdToSalas < ActiveRecord::Migration[6.0]
  def change
    add_reference :salas, :linea, null: false, foreign_key: true
  end
end
