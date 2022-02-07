class WishItem < ApplicationRecord
  has_one :sub_material
  has_one :photo
  has_one :frame
  has_one :size
  has_one :package
  belongs_to :user
end
