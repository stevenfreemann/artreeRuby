class ChangeStockInPhoto < ActiveRecord::Migration[6.0]
  def change
    change_column :photos, :stock, :integer, :default => 1000
  end
end
