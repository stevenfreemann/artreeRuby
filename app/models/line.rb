class Line < ApplicationRecord
  has_many :rooms
  has_many :sizes

  validates_presence_of :name

end
