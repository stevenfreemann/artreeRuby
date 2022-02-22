ActiveAdmin.register SubMaterial, as: "Sub-Materiales" do
  permit_params :name, :starred, :description, :price, :material_id, :file, :active

  form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs "Details" do
      f.input :name
      f.input :starred
      f.input :description
      f.input :price
			f.input :material_id, as: :select, collection: Material.all
			f.input :file
      f.input :active
    end
    f.actions
  end

  index do
		selectable_column
    id_column
		column :name
		column :description
    column :price
    column :file
		column :material_id do |i|
      i.material.name
		end
    column :active
		column :created_at
    column :updated_at
		actions
	end
end