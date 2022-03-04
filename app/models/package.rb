class Package < ApplicationRecord
  has_and_belongs_to_many :wish_item, optional: true

  validates_presence_of :name
end
