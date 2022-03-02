class Size < ApplicationRecord
  mount_uploader :file, FileUploader

  validates :name, :inclusion => { :in => ["Pequeño", "Mediano", "Grande"] }
  has_and_belongs_to_many :wish_item, optional: true
  belongs_to :line

end
