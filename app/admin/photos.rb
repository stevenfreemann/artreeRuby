ActiveAdmin.register Photo do
  permit_params :reference, :artist_id, :name, :description,
  	:base_price, :priority, :active, :starred, :file,
  	:line_id, :stock, :room_id

  # form do |f|
  # 	f.inputs "Details" do
  #     f.input :referencia
  #     f.input :artistum
  #     f.input :linea
  #     f.input :sala
  #     f.input :nombre
  #   end
  #   f.actions
  # end
end