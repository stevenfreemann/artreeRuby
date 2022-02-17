ActiveAdmin.register Banner do
  permit_params :title, :text, :page, :file, :active
end