# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Album.destroy_all
Playlist.destroy_all
Song.destroy_all
Artist.destroy_all

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

artist1 = Artist.create!(name: "Maverick City")
artist2 = Artist.create!(name: "Elevation Worship")

album1 = Album.create!(title: "Mav City 3", year: "2020", artist_id: artist1.id)
album2 = Album.create!(title: "Hallelujah Here Below", year: "2018", artist_id: artist2.id)

song1 = Song.create!(title: "Promises", album_id: album1.id)
song2 = Song.create!(title: "Most Beautiful", album_id: album1.id)
song3 = Song.create!(title: "Communion", album_id: album1.id)
song4 = Song.create!(title: "Wont' Stop Now", album_id: album2.id)
song5 = Song.create!(title: "Mighty God", album_id: album2.id)
song6 = Song.create!(title: "Worthy", album_id: album2.id)

playlist1 = Playlist.create!(title: "chill", user_id: chanu.id, private: true)
playlist2 = Playlist.create!(title: "cry at church", user_id: demo.id, private: true)

PlaylistSong.create!(playlist_id: playlist1.id, song_id: song4.id)
PlaylistSong.create!(playlist_id: playlist1.id, song_id: song5.id)
PlaylistSong.create!(playlist_id: playlist1.id, song_id: song6.id)

PlaylistSong.create!(playlist_id: playlist2.id, song_id: song1.id)
PlaylistSong.create!(playlist_id: playlist2.id, song_id: song2.id)
PlaylistSong.create!(playlist_id: playlist2.id, song_id: song3.id)



