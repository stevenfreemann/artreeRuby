class AddMobile2ToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :mobile2, :string
  end
end
