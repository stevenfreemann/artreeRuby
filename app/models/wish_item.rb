class WishItem < ApplicationRecord
  has_and_belongs_to_many :sub_materials, optional: true
  has_and_belongs_to_many :sizes, optional: true
  has_and_belongs_to_many :packages, optional: true
  has_and_belongs_to_many :photos, optional: true
  belongs_to :user

  def serialize
    { 
      id: id.to_s,
      user: user,
      sizes: sizes[0],
      sub_materials: sub_materials,
      photos: photos[0],
      packages: packages[0],
    }
  end
end
