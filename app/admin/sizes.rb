ActiveAdmin.register Size, as: "Dimensiones" do
  permit_params :line, :name, :dimensions, :description, :price, :file
end