class Banner < ApplicationRecord
  mount_uploader :file, FileUploader

  validates :page, :inclusion => { :in => ["Home", "Line Pro", "Line Exclusive","None"] }
  validates_presence_of :title, :text, :file
end
