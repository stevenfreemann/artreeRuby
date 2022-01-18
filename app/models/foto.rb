class Foto < ApplicationRecord
  belongs_to :artistum
  belongs_to :sala
  belongs_to :linea
  mount_uploader :file, FileUploader

end
