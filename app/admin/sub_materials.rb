ActiveAdmin.register SubMaterial, as: "Sub-Materiales" do
  permit_params :name, :starred, :description, :price, :material_id, :stock, :wish_item_id
end