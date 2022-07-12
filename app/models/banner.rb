class Banner < ApplicationRecord
  mount_uploader :file, FileUploader

  validates :page, :inclusion => { :in => ["Home", "Line Pro", "Line Exclusive"] }
  validates_presence_of :file
end
