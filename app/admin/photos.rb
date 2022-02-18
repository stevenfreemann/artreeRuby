ActiveAdmin.register Photo, as: "Fotos" do
   permit_params :reference, :artist_id, :name, :description,
	 :base_price, :active, :file, :line_id, :stock, :room_id, :align

	# form :html => { :enctype => "multipart/form-data" } do |f|
	# 	f.inputs "Details" do
	# 		f.input :line_id, as: :select, collection: Line.all.map { |a| [a.name] }
	# 		f.input :room_id, as: :select, collection: Room.all.map { |a| [a.name] }
	# 		f.input :artist_id, as: :select, collection: Artist.all.map { |a| [a.name] }
	# 		f.input :reference
	# 		f.input :name 
	# 		f.input :description
	# 		f.input :base_price     
	# 		f.input :active
	# 		f.input :file
	# 		f.input :stock
	# 	end
	# 	f.actions
  # end
end