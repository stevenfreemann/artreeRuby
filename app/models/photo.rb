class Photo < ApplicationRecord
  mount_uploader :file, FileUploader

  belongs_to :artist
  belongs_to :line
  belongs_to :room
  belongs_to :wish_item, optional: true

  validates :banner, :inclusion => { :in => ["NO", "SALA", "HOME"] }

end
