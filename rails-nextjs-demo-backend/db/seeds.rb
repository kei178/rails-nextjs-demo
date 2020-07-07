# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
{"foo" => "green", "bar" => "red", "baz" => "purple"}.each {|n,c| Example.create!(name: n, colour: c)}

User.create!(email: 'test@example.com', password: 'password')