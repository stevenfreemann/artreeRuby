ActiveAdmin.register Material do
  permit_params :nombre, :descripcion, :destacado, :precio, :material_disponible_id
end