ActiveAdmin.register Size, as: "Dimensiones" do
  permit_params :name, :dimensions, :description, :price

end