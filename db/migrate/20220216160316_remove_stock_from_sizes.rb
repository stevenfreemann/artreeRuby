class RemoveStockFromSizes < ActiveRecord::Migration[6.0]
  def change
    remove_column :sizes, :stock
  end
end
