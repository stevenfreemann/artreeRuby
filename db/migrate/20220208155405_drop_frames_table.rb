class DropFramesTable < ActiveRecord::Migration[6.0]
  def up
    drop_table :frames
  end
  
  def down
    raise ActiveRecord::IrreversibleMigration
  end
end