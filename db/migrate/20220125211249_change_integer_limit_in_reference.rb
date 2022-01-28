class ChangeIntegerLimitInReference < ActiveRecord::Migration[6.0]
  def change
    change_column :compras, :numero_referencia, :integer, limit: 8
  end
end
