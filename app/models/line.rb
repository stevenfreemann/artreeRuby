class Line < ApplicationRecord
  has_many :rooms
  has_many :sizes

end
