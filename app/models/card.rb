class Card < ActiveRecord::Base
  belongs_to :list
  has_many :comments
  has_many :actions
  
  def board_id
    list.board_id
  end
  
  def attributes
    super.merge({board_id: board_id, comments: comments})
  end
end