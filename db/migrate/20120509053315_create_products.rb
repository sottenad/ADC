class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.text :vehicles
      t.float :price

      t.timestamps
    end
  end
end