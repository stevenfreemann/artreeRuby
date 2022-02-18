ActiveAdmin.register Size, as: "Dimensiones" do

  form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs "Details" do
      f.input :name
			f.input :line_id, as: :select, collection: Line.all.map { |a| [a.name] }
      f.input :dimensions
      f.input :description
      f.input :price
			f.input :file, as: :select, collection: Line.all.map { |a| [a.name] }
    end
    f.actions
  end
end