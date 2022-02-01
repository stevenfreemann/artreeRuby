class ChangeTransactionIdInTransaction < ActiveRecord::Migration[6.0]
  def change
    change_column(:transactions, :transaction_id, :string)
  end
end
