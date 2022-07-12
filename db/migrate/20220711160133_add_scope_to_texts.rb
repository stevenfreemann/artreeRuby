class AddScopeToTexts < ActiveRecord::Migration[6.0]
  def change
    add_column :texts, :scope, :string
  end
end
