# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


User.destroy_all
Album.destroy_all
Playlist.destroy_all
Song.destroy_all
Artist.destroy_all

chanu = User.create!(email: 'chanu@gmail.com', 
                  password: 'chanuchoi', 
                  username: 'Chanu Choi',
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
artist3 = Artist.create!(name: "pH-1")
artist4 = Artist.create!(name: "Code Kunst")
artist5 = Artist.create!(name: "Isla Vista Worship")
artist6 = Artist.create!(name: "Sam Ock")
artist7 = Artist.create!(name: "Jinsang")


album1 = Album.create!(title: "Mav City 3", year: "2020", artist_id: artist1.id)
album1_photo = open('https://chillify-aa-dev.s3.amazonaws.com/MavCity.png')
album1.photo.attach(
  io: album1_photo,
  filename: "MavCity.png"
)

album2 = Album.create!(title: "Hallelujah Here Below", year: "2018", artist_id: artist2.id)
album2_photo = open("https://chillify-aa-dev.s3.amazonaws.com/hhb.png")
album2.photo.attach(
  io: album2_photo,
  filename: "hhb.png"
)

album3 = Album.create!(title: "HALO", year: "2019", artist_id: artist3.id)
album3_photo = open('https://chillify-aa-dev.s3.amazonaws.com/album+photos/HALO.png')
album3.photo.attach(io: album3_photo, filename: "HALO.png")
song7 = Song.create!(title: "Alright", album_id: album3.id)
song8 = Song.create!(title: "HYFR", album_id: album3.id)
song9 = Song.create!(title: "Maliby", album_id: album3.id)
song10 = Song.create!(title: "Lights Out", album_id: album3.id)
song11 = Song.create!(title: "Push Me", album_id: album3.id)
song12 = Song.create!(title: "Like Me", album_id: album3.id)
song13 = Song.create!(title: "Boat Ride", album_id: album3.id)
song14 = Song.create!(title: "Rain Man", album_id: album3.id)
song15 = Song.create!(title: "Olaf", album_id: album3.id)
song16 = Song.create!(title: "Dirty Nikes", album_id: album3.id)
song17 = Song.create!(title: "Till I Die", album_id: album3.id)
song18 = Song.create!(title: "Making Film", album_id: album3.id)

album4 = Album.create!(title: "The Island Kid", year: "2017", artist_id: artist3.id)
album4_photo = open('https://chillify-aa-dev.s3.amazonaws.com/album+photos/The+Island+Kid.png')
album4.photo.attach(io: album4_photo, filename: "The+Island+Kid.png")
song19 = Song.create!(title: "Christ", album_id: album4.id)
song20 = Song.create!(title: "Donut", album_id: album4.id)
song21 = Song.create!(title: "Game Night", album_id: album4.id)
song22 = Song.create!(title: "Cuckoo", album_id: album4.id)
song23 = Song.create!(title: "Escobar", album_id: album4.id)
song24 = Song.create!(title: "15", album_id: album4.id)

album5 = Album.create!(title: "PEOPLE", year: "2020", artist_id: artist4.id)
album5_photo = open('https://chillify-aa-dev.s3.amazonaws.com/album+photos/PEOPLE.png')
album5.photo.attach(io: album5_photo, filename: "PEOPLE.png")
song25 = Song.create!(title: "Get Out", album_id: album5.id)
song26 = Song.create!(title: "Bronco", album_id: album5.id)
song27 = Song.create!(title: "PEOPLE", album_id: album5.id)
song28 = Song.create!(title: "Dance", album_id: album5.id)
song29 = Song.create!(title: "Woode", album_id: album5.id)
song30 = Song.create!(title: "Flower", album_id: album5.id)
song31 = Song.create!(title: "Rollin", album_id: album5.id)
song32 = Song.create!(title: "JOKE!", album_id: album5.id)
song33 = Song.create!(title: "KnoCK", album_id: album5.id)

album6 = Album.create!(title: "Soul Hymns", year: "2019", artist_id: artist5.id)
album6_photo = open('https://chillify-aa-dev.s3.amazonaws.com/album+photos/Soul+Hymns.png')
album6.photo.attach(io: album6_photo, filename: "Soul+Hymns.png")
song34 = Song.create!(title: "814", album_id: album6.id)
song35 = Song.create!(title: "Captured", album_id: album6.id)
song36 = Song.create!(title: "So in Love", album_id: album6.id)
song37 = Song.create!(title: "Kindness", album_id: album6.id)
song38 = Song.create!(title: "My Portion", album_id: album6.id)
song39 = Song.create!(title: "Opened Up the Heavens", album_id: album6.id)

album7 = Album.create!(title: "Be Still. I", year: "2018", artist_id: artist6.id)
album7_photo = open('https://chillify-aa-dev.s3.amazonaws.com/album+photos/Be+Still.+I.png')
album7.photo.attach(io: album7_photo, filename: "Be+Still.+I.png")
song40 = Song.create!(title: "The Old Church Piano", album_id: album7.id)
song41 = Song.create!(title: "Thanksgiving", album_id: album7.id)
song42 = Song.create!(title: "Honesty", album_id: album7.id)
song43 = Song.create!(title: "My Soul Shall Sing", album_id: album7.id)
song44 = Song.create!(title: "Be Still & Know", album_id: album7.id)

album8 = Album.create!(title: "Be Still: My Heart", year: "2019", artist_id: artist6.id)
album8_photo = open('https://chillify-aa-dev.s3.amazonaws.com/album+photos/be+still+my+heart.png')
album8.photo.attach(io: album8_photo, filename: "be+still+my+heart.png")
song45 = Song.create!(title: "From a Broken Place", album_id: album8.id)
song46 = Song.create!(title: "Master and Apprentice", album_id: album8.id)
song47 = Song.create!(title: "New Today", album_id: album8.id)
song48 = Song.create!(title: "Cycles", album_id: album8.id)
song49 = Song.create!(title: "The Plant", album_id: album8.id)
song50 = Song.create!(title: "The Familiar Tune", album_id: album8.id)
song51 = Song.create!(title: "The Perfect Will Come", album_id: album8.id)

album9 = Album.create!(title: "Life", year: "2016", artist_id: artist7.id)
album9_photo = open('https://chillify-aa-dev.s3.amazonaws.com/album+photos/Life.png')
album9.photo.attach(io: album9_photo, filename: "Life.png")
song52 = Song.create!(title: "Genesis", album_id: album9.id)
song53 = Song.create!(title: "Birthday", album_id: album9.id)
song54 = Song.create!(title: "Return", album_id: album9.id)
song55 = Song.create!(title: "Bliss", album_id: album9.id)
song56 = Song.create!(title: "Herewego", album_id: album9.id)
song57 = Song.create!(title: "In the Clouds", album_id: album9.id)

album10 = Album.create!(title: "Transitions", year: "2020", artist_id: artist7.id)
album10_photo = open('https://chillify-aa-dev.s3.amazonaws.com/album+photos/Transitions.png')
album10.photo.attach(io: album10_photo, filename: "Transitions.png")
song58 = Song.create!(title: "introspect", album_id: album10.id)
song59 = Song.create!(title: "lemongrass", album_id: album10.id)
song60 = Song.create!(title: "ease in", album_id: album10.id)
song61 = Song.create!(title: "the way home", album_id: album10.id)
song62 = Song.create!(title: "blue haze", album_id: album10.id)
song63 = Song.create!(title: "misunderstood", album_id: album10.id)

# album3 = Album.create!(title: "HALO", year: "2019", artist_id: artist3.id)
# album3 = Album.create!(title: "HALO", year: "2019", artist_id: artist3.id)

song1 = Song.create!(title: "Promises", album_id: album1.id)
song2 = Song.create!(title: "Most Beautiful", album_id: album1.id)
song3 = Song.create!(title: "Communion", album_id: album1.id)
song4 = Song.create!(title: "Wont' Stop Now", album_id: album2.id)
song5 = Song.create!(title: "Mighty God", album_id: album2.id)
song6 = Song.create!(title: "Worthy", album_id: album2.id)

song1_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Everlasting+Father.mp3')
song1.track.attach(io: song1_track, filename: "Everlasting+Father.mp3")
song2_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Everlasting+Father.mp3')
song2.track.attach(io: song2_track, filename: "Everlasting+Father.mp3")
song3_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Everlasting+Father.mp3')
song3.track.attach(io: song3_track, filename: "Everlasting+Father.mp3")
song4_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Everlasting+Father.mp3')
song4.track.attach(io: song4_track, filename: "Everlasting+Father.mp3")
song5_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Everlasting+Father.mp3')
song5.track.attach(io: song5_track, filename: "Everlasting+Father.mp3")
song6_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Everlasting+Father.mp3')
song6.track.attach(io: song6_track, filename: "Everlasting+Father.mp3")

playlist1 = Playlist.create!(title: "chill and study", user_id: chanu.id, private: true)
playlist1_photo = open('https://chillify-aa-dev.s3.amazonaws.com/playlist+photos/study.png')
playlist1.photo.attach(io: playlist1_photo, filename:'study.png')

playlist2 = Playlist.create!(title: "chill and read", user_id: demo.id, private: true)
playlist2_photo = open('https://chillify-aa-dev.s3.amazonaws.com/playlist+photos/read.png')
playlist2.photo.attach(io: playlist2_photo, filename:'read.png')

playlist3 = Playlist.create!(title: "chill in korean", user_id: chanu.id, private: true)
playlist3_photo = open('https://chillify-aa-dev.s3.amazonaws.com/playlist+photos/korean.png')
playlist3.photo.attach(io: playlist3_photo, filename:'korean.png')

playlist4 = Playlist.create!(title: "chill by the fire", user_id: demo.id, private: true)
playlist4_photo = open('https://chillify-aa-dev.s3.amazonaws.com/playlist+photos/fire.png')
playlist4.photo.attach(io: playlist4_photo, filename:'fire.png')


PlaylistSong.create!(playlist_id: playlist1.id, song_id: song56.id)
PlaylistSong.create!(playlist_id: playlist1.id, song_id: song60.id)
PlaylistSong.create!(playlist_id: playlist1.id, song_id: song61.id)
PlaylistSong.create!(playlist_id: playlist1.id, song_id: song53.id)
PlaylistSong.create!(playlist_id: playlist1.id, song_id: song52.id)
PlaylistSong.create!(playlist_id: playlist1.id, song_id: song13.id)
PlaylistSong.create!(playlist_id: playlist1.id, song_id: song43.id)
PlaylistSong.create!(playlist_id: playlist1.id, song_id: song52.id)
PlaylistSong.create!(playlist_id: playlist1.id, song_id: song63.id)

PlaylistSong.create!(playlist_id: playlist2.id, song_id: song40.id)
PlaylistSong.create!(playlist_id: playlist2.id, song_id: song42.id)
PlaylistSong.create!(playlist_id: playlist2.id, song_id: song44.id)
PlaylistSong.create!(playlist_id: playlist2.id, song_id: song46.id)
PlaylistSong.create!(playlist_id: playlist2.id, song_id: song48.id)
PlaylistSong.create!(playlist_id: playlist2.id, song_id: song50.id)

PlaylistSong.create!(playlist_id: playlist3.id, song_id: song7.id)
PlaylistSong.create!(playlist_id: playlist3.id, song_id: song23.id)
PlaylistSong.create!(playlist_id: playlist3.id, song_id: song34.id)
PlaylistSong.create!(playlist_id: playlist3.id, song_id: song32.id)
PlaylistSong.create!(playlist_id: playlist3.id, song_id: song21.id)
PlaylistSong.create!(playlist_id: playlist3.id, song_id: song15.id)
PlaylistSong.create!(playlist_id: playlist3.id, song_id: song26.id)
PlaylistSong.create!(playlist_id: playlist3.id, song_id: song8.id)

PlaylistSong.create!(playlist_id: playlist4.id, song_id: song1.id)
PlaylistSong.create!(playlist_id: playlist4.id, song_id: song2.id)
PlaylistSong.create!(playlist_id: playlist4.id, song_id: song3.id)
PlaylistSong.create!(playlist_id: playlist4.id, song_id: song5.id)
PlaylistSong.create!(playlist_id: playlist4.id, song_id: song50.id)
PlaylistSong.create!(playlist_id: playlist4.id, song_id: song42.id)
PlaylistSong.create!(playlist_id: playlist4.id, song_id: song40.id)
PlaylistSong.create!(playlist_id: playlist4.id, song_id: song35.id)
PlaylistSong.create!(playlist_id: playlist4.id, song_id: song23.id)
PlaylistSong.create!(playlist_id: playlist4.id, song_id: song5.id)
PlaylistSong.create!(playlist_id: playlist4.id, song_id: song7.id)
PlaylistSong.create!(playlist_id: playlist4.id, song_id: song13.id)



