class Artist < ApplicationRecord
  has_many: photos
  mount_uploader :file, FileUploader

	def name
		self.name
	end
	def self.photo
		"/images/default_image.png"
	end
end
