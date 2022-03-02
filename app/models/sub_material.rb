class SubMaterial < ApplicationRecord
  mount_uploader :file, FileUploader

  has_and_belongs_to_many :wish_item, optional: true
  belongs_to :material
end
