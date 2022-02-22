ActiveAdmin.register Photo, as: "Fotos" do
	permit_params :reference, :artist_id, :name, :description,
	:base_price, :active, :file, :line_id, :stock, :room_id
	
	form :html => { :enctype => "multipart/form-data" } do |f|
		f.inputs "Details" do
			f.input :line_id, as: :select, collection: Line.all
			f.input :room_id, as: :select, collection: Room.all
			f.input :artist_id, as: :select, collection: Artist.all
			f.input :name 
			f.input :description
			f.input :base_price     
			f.input :active
			f.input :file
			f.input :stock
		end
				
		f.actions
  end

	index do
		selectable_column
    id_column
		column :name
		column :description
    column :base_price
    column :stock
    column :file
    column :active
		column :line_id do |i|
      i.line.name
		end
		column :room_id do |i|
      i.room.name
		end
		column :artist_id do |i|
      i.artist.name
		end
		column :created_at
    column :updated_at
		actions
	end
end