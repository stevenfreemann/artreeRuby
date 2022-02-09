ActiveAdmin.register Photo, as: "Fotos" do
  permit_params :reference, :artist_id, :name, :description,
  	:base_price, :priority, :active, :starred, :file,
  	:line_id, :stock, :room_id
end