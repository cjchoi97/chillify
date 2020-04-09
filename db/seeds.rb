# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

chanu = User.create!(email: 'chanu@gmail.com', 
                  password: 'chanuchoi', 
                  username: 'chanu',
                  preferred_name: 'Chanu Choi',
                  birth_date: '19971007',
                  gender: 'male')

demo = User.create!(email: 'demo@gmail.com', 
                  password: 'password', 
                  username: 'demo user',
                  preferred_name: 'demo user',
                  birth_date: '19971007',
                  gender: 'male')