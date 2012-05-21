class ChangeDataTypeForVehiclesYear < ActiveRecord::Migration
  def up
    change_table :vehicles do |t|
      t.change :year, :integer
    end
  end

  def down
    change_table :vehicles do |t|
      t.change :year, :float
    end
  end
end
