class AddImageAndDescriptionToProducts < ActiveRecord::Migration
  def change
    add_column :products, :image, :text

    add_column :products, :description, :text

  end
end
