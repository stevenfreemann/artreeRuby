class Room < ApplicationRecord
  mount_uploader :file, FileUploader
  mount_uploader :space_horizontal, FileUploader
  mount_uploader :space_vertical, FileUploader


  validates :top_horizontal, :inclusion => { :in => 0..100 }
  validates :left_horizontal, :inclusion => { :in => 0..100 }
  validates :top_vertical, :inclusion => { :in => 0..100 }
  validates :left_vertical, :inclusion => { :in => 0..100 }


  belongs_to :line
  has_many :photos
end
