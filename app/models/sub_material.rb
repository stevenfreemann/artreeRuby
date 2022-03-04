class SubMaterial < ApplicationRecord
  mount_uploader :file, FileUploader

  has_and_belongs_to_many :wish_item, optional: true
  belongs_to :material

  validates_presence_of :name, :description, :price
end
