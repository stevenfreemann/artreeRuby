class CreateMarcoColors < ActiveRecord::Migration[6.0]
  def change
    create_table :marco_colors do |t|
      t.references :marco, null: false, foreign_key: true
      t.references :color_marco, null: false, foreign_key: true

      t.timestamps
    end
  end
end
