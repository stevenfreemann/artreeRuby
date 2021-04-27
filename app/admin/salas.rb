ActiveAdmin.register Sala do
  permit_params :name, :pin, :linea_id

  form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs "Details" do
      f.input :name
      f.input :pin
      f.input :linea   
    end
    f.actions
  end
end