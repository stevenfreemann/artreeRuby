class AddNullsToPackages < ActiveRecord::Migration[6.0]
  def change
    change_column_null(:packages, :name, false)
  end
end
