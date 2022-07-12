ActiveAdmin.register Line, as: "Lineas" do
  permit_params :name, :description, :image_index

  index do
    id_column
    column :name
    column :description
    column :image_index do |im|
      image_tag im.image_index.url (:thumb) if im.image_index.url
    end
    actions 
  end

  form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs "Details" do
      f.input :name
      f.input :description
			f.input :image_index, input_html: {accept: ".jpg, .jpeg, .gif, .png"}, hint: "Se recomienda imágenes con resolución de 1920px de ancho y con peso no mayor a 5Mb"
    end
    f.actions
  end

end