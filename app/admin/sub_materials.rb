ActiveAdmin.register SubMaterial do
  permit_params :name, :starred, :description, :price, :material_id, :wish_item_id
end