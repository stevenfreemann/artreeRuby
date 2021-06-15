class ChangeTypeMobileToString < ActiveRecord::Migration[6.0]
  def change
    change_column :users, :mobile, :string
  end
end
