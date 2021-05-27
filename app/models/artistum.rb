class Artistum < ApplicationRecord
	has_many :fotos
	def name
		self.nombre
	end
	def self.photo
		"/images/default_image.png"
	end
end
