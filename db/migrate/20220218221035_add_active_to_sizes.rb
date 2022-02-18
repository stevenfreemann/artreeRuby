class AddActiveToSizes < ActiveRecord::Migration[6.0]
  def change
    add_column :sizes, :active, :boolean, default: true
  end
end
