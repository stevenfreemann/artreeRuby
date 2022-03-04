class Artist < ApplicationRecord
  has_many :photos
  mount_uploader :file, FileUploader

	validates_presence_of :name, :bio, :file


	def self.file
		"/images/default_image.png"
	end
end
