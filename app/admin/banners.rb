ActiveAdmin.register Banner do
  permit_params :titulo, :texto, :pagina, :enlace, :enlace_texto, :activo
end