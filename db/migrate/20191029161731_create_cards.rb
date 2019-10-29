class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :title, :description
      t.integer :list_id, :board_id
      t.datetime :due_date
      t.timestamps
      t.string :labels, array: true, default: [], nil: false
    end
  end
end
