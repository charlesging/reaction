class AddArchivedToCards < ActiveRecord::Migration[5.1]
  def change
    change_table :cards do |t|
      t.boolean :archived, :default => false
    end
  end
end
