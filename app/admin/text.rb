ActiveAdmin.register Text, as: "Textos" do
  permit_params :name, :content, :scope

  index do
		selectable_column
    id_column
		column :scope
		column :name
    column :content
		column :created_at
    column :updated_at
		actions
	end
end