class Comment < ActiveRecord::Base
  belongs_to :card 
  validates_presence_of :card_id
end