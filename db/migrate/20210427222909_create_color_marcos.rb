class CreateColorMarcos < ActiveRecord::Migration[6.0]
  def change
    create_table :color_marcos do |t|
      t.string :nombre
      t.string :color

      t.timestamps
    end
  end
end
