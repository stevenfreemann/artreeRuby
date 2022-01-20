class DropTransactionsTable < ActiveRecord::Migration[6.0]
  def up
    drop_table :transactions
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end