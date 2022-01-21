class AddUserToCompras < ActiveRecord::Migration[6.0]
  def change
    add_reference :compras, :user, foreign_key: true
  end
end
