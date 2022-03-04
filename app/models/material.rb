class Material < ApplicationRecord
  mount_uploader :file, FileUploader

  validates_presence_of :name , :file
end
