class WishItem < ApplicationRecord
  has_many :sub_materials
  has_one :photo
  has_one :frame
  has_one :size
  has_one :package
  belongs_to :user

  def serialize
    { 
      id: id.to_s,
      user: user,
      frame: frame,
      size: size,
      sub_material: sub_material,
      photo: photo,
    }
  end
end
