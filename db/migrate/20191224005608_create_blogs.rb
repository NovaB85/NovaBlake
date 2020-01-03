class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :body
      t.string :date

      t.timestamps
    end
  end
end
