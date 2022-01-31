ActiveAdmin.register Size do
  permit_params :name, :dimensions, :description, :price

end