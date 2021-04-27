class CreateMarcos < ActiveRecord::Migration[6.0]
  def change
    create_table :marcos do |t|
      t.string :nombre
      t.text :descripcion
      t.integer :precio

      t.timestamps
    end
  end
end
