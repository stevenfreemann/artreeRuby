class Material < ApplicationRecord
  mount_uploader :file, FileUploader

  has_many :sub_materials
end
