class RemoveBoardIdFromCards < ActiveRecord::Migration[5.1]
  def change
    change_table :cards do |t|
      t.remove :board_id
    end
  end
end
