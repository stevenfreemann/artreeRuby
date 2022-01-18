ActiveAdmin.register Foto do
  permit_params :referencia, :artistum_id, :nombre, :descripcion,
  	:precio_base, :prioridad, :activo, :color, :destacado, :destacado_temporada, 
  	:linea_id, :stock, :numero_actual, :pineado, :sala_id, :file

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