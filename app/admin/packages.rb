ActiveAdmin.register Package, as: "Empaques" do
  permit_params :name, :price, :active

  index do
		selectable_column
    id_column
		column :name
    column :price
    column :active
		column :created_at
    column :updated_at
		actions
	end
end