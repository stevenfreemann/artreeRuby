class Size < ApplicationRecord
  mount_uploader :file, FileUploader

  belongs_to :wish_item, optional: true
end
