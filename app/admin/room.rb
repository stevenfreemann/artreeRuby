ActiveAdmin.register Room, as: "Salas" do
  permit_params :name, :pinned, :line_id, :description, :file, :space_horizontal, :space_vertical, :top, :left

  form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs "Details" do
      f.input :name
      f.input :pinned
      f.input :line
      f.input :description
      f.input :space_horizontal
      f.input :space_vertical
      f.input :file
      f.input :top
      f.input :left


    end
    f.actions
  end
end
