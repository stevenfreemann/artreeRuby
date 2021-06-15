class AddFieldnameToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :name, :string
    add_column :users, :mobile2, :string
    add_column :users, :document, :string
    add_column :users, :mobile, :string
    add_column :users, :phone, :integer
  end
end
