class Artistum < ApplicationRecord
	has_many :fotos

	def name
		self.nombre
	end
end
