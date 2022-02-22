class Size < ApplicationRecord
  mount_uploader :file, FileUploader

  validates :name, :inclusion => { :in => ["Pequeño", "Mediano", "Grande"] }
  belongs_to :wish_item, optional: true
  belongs_to :line

end
