ActiveAdmin.register SubMaterial, as: "Sub-Materiales" do
  permit_params :name, :starred, :description, :price, :material_id, :wish_item_id, :file
end