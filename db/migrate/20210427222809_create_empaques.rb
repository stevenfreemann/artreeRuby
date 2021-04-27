class CreateEmpaques < ActiveRecord::Migration[6.0]
  def change
    create_table :empaques do |t|
      t.string :nombre

      t.timestamps
    end
  end
end
