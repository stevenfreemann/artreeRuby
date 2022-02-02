class Artist < ApplicationRecord
  has_many :photos
  mount_uploader :file, FileUploader

	def self.file
		"/images/default_image.png"
	end
end
