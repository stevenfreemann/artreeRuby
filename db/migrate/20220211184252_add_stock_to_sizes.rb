class AddStockToSizes < ActiveRecord::Migration[6.0]
  def change
    add_column :sizes, :stock, :integer
  end
end
