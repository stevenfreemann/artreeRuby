ActiveAdmin.register Room, as: "Salas" do
  permit_params :name, :pinned, :line_id, :description, :file

  # form :html => { :enctype => "multipart/form-data" } do |f|
  #   f.inputs "Details" do
  #     f.input :name
  #     f.input :pinned
  #     f.input :line
  #     f.input :description

  #   end
  #   f.actions
  # end
end