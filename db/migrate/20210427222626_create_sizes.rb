class CreateSizes < ActiveRecord::Migration[6.0]
  def change
    create_table :sizes do |t|
      t.string :name
      t.string :dimensions
      t.text :description
      t.integer :price

      t.timestamps
    end
  end
end
