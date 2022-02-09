class AddFileToSizes < ActiveRecord::Migration[6.0]
  def change
    add_column :sizes, :file, :string
  end
end
