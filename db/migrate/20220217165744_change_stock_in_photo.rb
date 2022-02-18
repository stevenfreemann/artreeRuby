class ChangeStockInPhoto < ActiveRecord::Migration[6.0]
  reversible do |dir|
    dir.up do
      change_column :photos, :stock, :integer, default: 1000
      change_column :photos, :active, :boolean, default: true
    end

    dir.down do
      change_column :photos, :stock, :integer
      change_column :photos, :active, :boolean
    end
  end
end
