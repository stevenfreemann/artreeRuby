class RemoveFieldNameFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :username, :string
  end
end
