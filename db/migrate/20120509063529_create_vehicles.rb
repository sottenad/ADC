class CreateVehicles < ActiveRecord::Migration
  def change
    create_table :vehicles do |t|
      t.integer :id
      t.string :make
      t.string :model
      t.string :trim
      t.float :year

      t.timestamps
    end
  end
end
