ActiveAdmin.register Size, as: "Dimensiones" do
  permit_params :name, :line_id, :dimensions, :description, :price, :file, :active

  form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs "Details" do
      f.input :name, as: :select, collection: ["Pequeño", "Mediano", "Grande"]
			f.input :line_id, as: :select, collection: Line.all
      f.input :dimensions
      f.input :description
      f.input :price
      f.input :active
    end
    f.actions
  end

  index do
		selectable_column
    id_column
		column :name
    column :dimensions
		column :description
    column :price
		column :line_id do |i|
      i.line.name
		end
    column :active
		column :created_at
    column :updated_at
		actions
	end
end