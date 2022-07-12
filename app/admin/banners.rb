ActiveAdmin.register Banner do
  permit_params :title, :text, :page, :file

  index do
    id_column
    column :title
    column :page
    column :text
    column :file do |im|
      image_tag im.file.url (:thumb) if im.file.url
    end
    actions 
  end

  form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs "Details" do
      f.input :title
      f.input :page, as: :select, collection: ["Home", "Line Pro", "Line Exclusive"]
      f.input :text
			f.input :file, input_html: {accept: ".jpg, .jpeg, .gif, .png"}, hint: "Se recomienda imágenes con resolución de 1920px de ancho y con peso no mayor a 5Mb"
    end
    f.actions
  end
end
