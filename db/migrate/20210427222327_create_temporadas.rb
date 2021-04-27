class CreateTemporadas < ActiveRecord::Migration[6.0]
  def change
    create_table :temporadas do |t|
      t.string :nombre
      t.boolean :active, default: false

      t.timestamps
    end
  end
end
