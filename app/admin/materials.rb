ActiveAdmin.register Material, as: "Materiales" do
  permit_params :name, :file
end