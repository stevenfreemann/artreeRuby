class Room < ApplicationRecord
  mount_uploader :file, FileUploader

  belongs_to :line
  has_many :photos
end
