class WishItem < ApplicationRecord
  has_many :sub_materials
  has_one :photo
  has_one :frame
  has_one :size
  has_one :packing
  belongs_to :user

end
