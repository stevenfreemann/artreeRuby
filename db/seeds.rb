# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# puts "-----migrating"
# if !Artist.first
# 	20.times do |i|
# 		Artist.create(name: "nombre_#{i}", bio: "Description #{i}", file: "artist2.png" , facebook: "http://facebook.com",instagram: "http://instagram.com",pinterest: "http://pinterest.com",linkedin:"http://linkedin.com", starred:false)
# 	end
# end

if !AdminUser.first
	AdminUser.create!(email: 'artree@artree.com.co', password: '123456', password_confirmation: '123456')
end

if !Text.first
	Text.create!(scope: "Home", name:"Destacados", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
end

if !Line.first
	Line.create!(name: 'Exclusive', description: 'Linea Exclusiva')
	Line.create!(name: 'Pro', description: 'Linea Pro')
end

if !Room.first
	3.times do |i|
		Room.create!(name: "Sala #{i}", line: Line.first)
	end
end

# if !Package.first
# 	Package.create!(name: 'regalo')
# end

# if !Material.first
# 	Material.create!(name: 'reciclado', kind: 'papel')
# end

# if !SubMaterial.first
# 	SubMaterial.create!(name: 'doble', description: 'papel reforzado', price: 25000, material: Material.first)
# end

# if !Size.first
# 	Size.create!(name: 'mediano', dimensions: '120 x 120', price: 32000, description: 'Adecuado para decoracion en habitaciones')
# end

# if !Frame.first
# 	Frame.create!(name: 'cedro', description: 'Marco en madera, tipo cedro', price: 40000)
# end
# if !WishItem.first
# 	5.times do |i|
# 		WishItem.create(name: "nombre_#{i}", phrase: "Description #{i}", dimensions: "120 * 240", frame: "Tipo de marco #{i}", material: "Tipo de material #{i}", price: 120000 , group: "linea pro", user: User.first)
# 	end
# end

#if !AdminUser.first
#	AdminUser.create!(email: 'lalalopezv@me.com', password: 'password', password_confirmation: 'password')
#	AdminUser.create!(email: 'ecoelloc@hotmail.com', password: 'password', password_confirmation: 'password')
#	AdminUser.create!(email: 'bi777@hotmail.com', password: 'password', password_confirmation: 'password')
#	AdminUser.create!(email: 'javier@f2p.co', password: 'password', password_confirmation: 'password')
#end
#
#if !Linea.first
#	Linea.create!(nombre: "Exclusive", descripcion: "Exclusiva Lorem")
#	Linea.create!(nombre: "Pro", descripcion: "Pro Lorem")
#	Linea.create!(nombre: "Like a Pro", descripcion: "Like a Pro Lorem")
#endAdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?