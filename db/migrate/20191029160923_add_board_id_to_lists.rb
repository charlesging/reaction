class AddBoardIdToLists < ActiveRecord::Migration[5.1]
  def change
    change_table :lists do |t|
      t.integer :board_id
    end
  end
end
