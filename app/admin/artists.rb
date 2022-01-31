ActiveAdmin.register Artist do
  permit_params :name, :bio, :facebook, :instagram, :linkedin, :pinterest, :starred, :file
end