class Photo < ApplicationRecord
  mount_uploader :file, FileUploader

  belongs_to :artist
  belongs_to :line
  belongs_to :room
  has_and_belongs_to_many :wish_item, optional: true

end
