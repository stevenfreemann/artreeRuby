ActiveAdmin.register Room, as: "Salas" do
  permit_params :name, :pinned, :line_id, :description, :file, :space_horizontal, :space_vertical, :top_horizontal, :left_horizontal, :top_vertical, :left_vertical

  form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs "Details" do
      f.input :name
      f.input :pinned
      f.input :line_id, as: :select, collection: Line.all
      f.input :description
      f.input :space_horizontal
      f.input :space_vertical
      f.input :file
      f.input :top_horizontal
      f.input :left_horizontal
      f.input :top_vertical
      f.input :left_vertical
    end
    f.actions
  end
end
