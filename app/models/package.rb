class Package < ApplicationRecord
  belongs_to :wish_item, optional: true
end
