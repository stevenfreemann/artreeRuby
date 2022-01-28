class Photo < ApplicationRecord
  belongs_to :artist
  belongs_to :line
  belongs_to :room
  belongs_to :wish_item
end
