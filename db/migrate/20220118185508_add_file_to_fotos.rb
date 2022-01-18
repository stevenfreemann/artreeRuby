class AddFileToFotos < ActiveRecord::Migration[6.0]
  def change
    add_column :fotos, :file, :string
  end
end
