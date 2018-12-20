class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :question
      t.integer :points
      t.string :answer1
      t.string :answer2
      t.string :answer3
      t.string :answer4
      t.string :correct_answer
      t.string :answered, default: false
      t.belongs_to :category, foreign_key: true

      t.timestamps
    end
  end
end
