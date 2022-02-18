class AddPriceToPackages < ActiveRecord::Migration[6.0]
  def change
    add_column :packages, :price, :integer, default: 0
  end
end
