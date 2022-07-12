class Line < ApplicationRecord
  mount_uploader :image_index, FileUploader
  
  has_many :rooms
  has_many :sizes

  validates_presence_of :name

end
