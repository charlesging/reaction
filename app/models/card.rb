class Card < ActiveRecord::Base
  belongs_to :list

  def board_id
    list.board_id
  end
  
  def attributes
    super.merge({board_id: board_id})
  end
end