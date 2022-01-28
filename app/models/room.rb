class Room < ApplicationRecord
  belongs_to :line
  has_many :photos
end
