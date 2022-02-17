ActiveAdmin.register Photo, as: "Fotos" do
  permit_params :reference, :artist_id, :name, :description,
	:base_price, :active, :file,
	:line_id, :stock, :room_id, :banner

	# form do |f|
	# 	f.input :reference
	# 	f.input :artist_id
	# 	f.input :name 
	# 	f.input :description
	# 	f.input :base_price     
	# 	f.input :active
	# 	f.input :file
	# 	f.input :line_id
	# 	f.input :stock
	# 	f.input :room_id
	# 	f.input :banner , :as => :select, collection: (["NO", "SALA", "HOME"])
	# 	f.actions
	# 	end
end