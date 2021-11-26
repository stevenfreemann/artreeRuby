# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

if !Artistum.first
	40.times do |i|
		Artistum.create(nombre: "nombre_#{i}", bio: "Description #{i}", facebook: "http://facebook.com",instagram: "http://instagram.com",pinterest: "http://pinterest.com",linkedin:"http://linkedin.com", destacado:false)
	end
end

if !AdminUser.first
	AdminUser.create!(email: 'jonathan.jrr.rincon@gmail.com', password: '123456', password_confirmation: '123456')
end

if !User.first
	AdminUser.create!(email: 'jonathan.jrr.rincon@gmail.com', password: '123456', password_confirmation: '123456')
end
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
#end