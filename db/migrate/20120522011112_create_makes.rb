class CreateMakes < ActiveRecord::Migration
  def change
    create_table :makes do |t|
      t.string :make

      t.timestamps
    end
  end
end
