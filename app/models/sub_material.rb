class SubMaterial < ApplicationRecord
  belongs_to :wish_item, optional: true
  belongs_to :material
end
