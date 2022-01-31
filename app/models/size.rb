class Size < ApplicationRecord
  belongs_to :wish_item, optional: true
end
