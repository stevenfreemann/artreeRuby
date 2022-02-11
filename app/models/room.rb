class Room < ApplicationRecord
  mount_uploader :file, FileUploader
  mount_uploader :space, FileUploader

  validates :top, :inclusion => { :in => 0..100 }
  validates :left, :inclusion => { :in => 0..100 }

  belongs_to :line
  has_many :photos
end
