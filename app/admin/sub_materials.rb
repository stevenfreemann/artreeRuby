ActiveAdmin.register SubMaterial do
  permit_params :name, :starred, :description, :price, :material_id
end