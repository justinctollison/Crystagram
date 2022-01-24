class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :text
      t.string :image_url
      t.string :quote
      t.string :quote_person
      t.integer :likes
      t.belongs_to :user
      t.belongs_to :comment

      t.timestamps
    end
  end
end
