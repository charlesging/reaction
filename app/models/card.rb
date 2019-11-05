class Card < ActiveRecord::Base
  belongs_to :list
  has_many :comments
  
  def board_id
    list.board_id
  end
  
  def attributes
    super.merge({board_id: board_id})
  end
end