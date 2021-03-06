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
artist1_photo = open('https://chillify-aa-dev.s3.amazonaws.com/artist+photos/mavcitycover.jpg');
artist1.photo.attach(io: artist1_photo, filename: "mavcitycover.jpg")

artist2 = Artist.create!(name: "Elevation Worship")
artist2_photo = open('https://chillify-aa-dev.s3.amazonaws.com/artist+photos/elevationcover.jpeg');
artist2.photo.attach(io: artist2_photo, filename: "elevationcover.jpeg")

artist3 = Artist.create!(name: "pH-1")
artist3_photo = open('https://chillify-aa-dev.s3.amazonaws.com/artist+photos/ph-1cover.jpg');
artist3.photo.attach(io: artist3_photo, filename: "ph-1cover.jpg")

artist4 = Artist.create!(name: "Code Kunst")
artist4_photo = open('https://chillify-aa-dev.s3.amazonaws.com/artist+photos/codekunstcover.jpeg');
artist4.photo.attach(io: artist4_photo, filename: "codekunstcover.jpeg")

artist5 = Artist.create!(name: "Isla Vista Worship")
artist5_photo = open('https://chillify-aa-dev.s3.amazonaws.com/artist+photos/islavistacover.jpeg');
artist5.photo.attach(io: artist5_photo, filename: "islavistacover.jpeg")

artist6 = Artist.create!(name: "Sam Ock")
artist6_photo = open('https://chillify-aa-dev.s3.amazonaws.com/artist+photos/samockcover.jpeg');
artist6.photo.attach(io: artist6_photo, filename: "samockcover.jpeg")

artist7 = Artist.create!(name: "Jinsang")
artist7_photo = open('https://chillify-aa-dev.s3.amazonaws.com/artist+photos/Jinsangcover.jpeg');
artist7.photo.attach(io: artist7_photo, filename: "Jinsangcover.jpeg")


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
song7 = Song.create!(title: "Alright", duration: "3:40", album_id: album3.id)
song7_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Halo/Alright.mp3')
song7.track.attach(io: song7_track, filename: "Alright.mp3")
song8 = Song.create!(title: "HYFR", duration: "3:36", album_id: album3.id)
song8_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Halo/HYFR.mp3')
song8.track.attach(io: song8_track, filename: "HYFR.mp3")
song9 = Song.create!(title: "Malibu", duration: "4:17", album_id: album3.id)
song9_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Halo/Malibu.mp3')
song9.track.attach(io: song9_track, filename: "Malibu.mp3")
song10 = Song.create!(title: "Lights Out", duration: "2:55", album_id: album3.id)
song10_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Halo/Lights+Out.mp3')
song10.track.attach(io: song10_track, filename: "Lights+Out.mp3")
song11 = Song.create!(title: "Push Me", duration: "3:39", album_id: album3.id)
song11_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Halo/Push+Me.mp3')
song11.track.attach(io: song11_track, filename: "Push+Me.mp3")
song12 = Song.create!(title: "Like Me", duration: "3:57", album_id: album3.id)
song12_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Halo/Like+Me.mp3')
song12.track.attach(io: song12_track, filename: "Like+Me.mp3")
song13 = Song.create!(title: "Boat Ride", duration: "3:37", album_id: album3.id)
song13_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Halo/Boat+Ride.mp3')
song13.track.attach(io: song13_track, filename: "Boat+Ride.mp3")
song14 = Song.create!(title: "Rain Man", duration: "3:42", album_id: album3.id)
song14_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Halo/Rain+Man.mp3')
song14.track.attach(io: song14_track, filename: "Rain+Man.mp3")
song15 = Song.create!(title: "Olaf", duration: "3:28", album_id: album3.id)
song15_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Halo/Olaf.mp3')
song15.track.attach(io: song15_track, filename: "Olaf.mp3")
song16 = Song.create!(title: "Dirty Nikes", duration: "3:40", album_id: album3.id)
song16_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Halo/Dirty+Nikes.mp3')
song16.track.attach(io: song16_track, filename: "Dirty+Nikes.mp3")
song17 = Song.create!(title: "Till I Die", duration: "3:53", album_id: album3.id)
song17_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Halo/Til+I+Die.mp3')
song17.track.attach(io: song17_track, filename: "Til+I+Die.mp3")
song18 = Song.create!(title: "Making Film", duration: "3:16", album_id: album3.id)
song18_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Halo/Making+Film.mp3')
song18.track.attach(io: song18_track, filename: "Making+Film.mp3")

album4 = Album.create!(title: "The Island Kid", year: "2017", artist_id: artist3.id)
album4_photo = open('https://chillify-aa-dev.s3.amazonaws.com/album+photos/The+Island+Kid.png')
album4.photo.attach(io: album4_photo, filename: "The+Island+Kid.png")
song19 = Song.create!(title: "Christ", duration: "3:41", album_id: album4.id)
song19_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/The+Island+Kid/Christ.mp3')
song19.track.attach(io: song19_track, filename: "Christ.mp3")
song20 = Song.create!(title: "Donut", duration: "3:54", album_id: album4.id)
song20_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/The+Island+Kid/Donut.mp3')
song20.track.attach(io: song20_track, filename: "Donut.mp3")
song21 = Song.create!(title: "Game Night", duration: "2:59", album_id: album4.id)
song21_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/The+Island+Kid/Game+Night.mp3')
song21.track.attach(io: song21_track, filename: "Game+Night.mp3")
song22 = Song.create!(title: "Cuckoo", duration: "3:30", album_id: album4.id)
song22_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/The+Island+Kid/Cuckoo.mp3')
song22.track.attach(io: song22_track, filename: "Cuckoo.mp3")
song23 = Song.create!(title: "Escobar", duration: "3:24", album_id: album4.id)
song23_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/The+Island+Kid/Escobar.mp3')
song23.track.attach(io: song23_track, filename: "Escobar.mp3")
song24 = Song.create!(title: "15", duration: "4:12", album_id: album4.id)
song24_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/The+Island+Kid/15.mp3')
song24.track.attach(io: song24_track, filename: "15.mp3")

album5 = Album.create!(title: "PEOPLE", year: "2020", artist_id: artist4.id)
album5_photo = open('https://chillify-aa-dev.s3.amazonaws.com/album+photos/PEOPLE.png')
album5.photo.attach(io: album5_photo, filename: "PEOPLE.png")
song25 = Song.create!(title: "Get Out", duration: "4:28", album_id: album5.id)
song25_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/PEOPLE/Get+Out.mp3')
song25.track.attach(io: song25_track, filename: "Get+Out.mp3")
song26 = Song.create!(title: "Bronco", duration: "3:54", album_id: album5.id)
song26_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/PEOPLE/Bronco.mp3')
song26.track.attach(io: song26_track, filename: "Bronco.mp3")
song27 = Song.create!(title: "PEOPLE", duration: "3:39", album_id: album5.id)
song27_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/PEOPLE/PEOPLE.mp3')
song27.track.attach(io: song27_track, filename: "PEOPLE.mp3")
song28 = Song.create!(title: "Dance", duration: "3:29", album_id: album5.id)
song28_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/PEOPLE/Dance.mp3')
song28.track.attach(io: song28_track, filename: "Dance.mp3")
song29 = Song.create!(title: "Woode", duration: "1:58", album_id: album5.id)
song29_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/PEOPLE/Woode.mp3')
song29.track.attach(io: song29_track, filename: "Woode.mp3")
song30 = Song.create!(title: "Flower", duration: "4:33", album_id: album5.id)
song30_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/PEOPLE/Flower.mp3')
song30.track.attach(io: song30_track, filename: "Flower.mp3")
song31 = Song.create!(title: "Rollin", duration: "3:06", album_id: album5.id)
song31_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/PEOPLE/Rollin.mp3')
song31.track.attach(io: song31_track, filename: "Rollin.mp3")
song32 = Song.create!(title: "JOKE!", duration: "3:47", album_id: album5.id)
song32_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/PEOPLE/JOKE!.mp3')
song32.track.attach(io: song32_track, filename: "JOKE!.mp3")
song33 = Song.create!(title: "KnoCK", duration: "3:19", album_id: album5.id)
song33_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/PEOPLE/KnoCK.mp3')
song33.track.attach(io: song33_track, filename: "KnoCK.mp3")

album6 = Album.create!(title: "Soul Hymns", year: "2019", artist_id: artist5.id)
album6_photo = open('https://chillify-aa-dev.s3.amazonaws.com/album+photos/Soul+Hymns.png')
album6.photo.attach(io: album6_photo, filename: "Soul+Hymns.png")
song34 = Song.create!(title: "814", duration: "4:04", album_id: album6.id)
song34_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Soul+Hymns/814.mp3')
song34.track.attach(io: song34_track, filename: "814.mp3")
song35 = Song.create!(title: "Captured", duration: "5:12", album_id: album6.id)
song35_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Soul+Hymns/Captured.mp3')
song35.track.attach(io: song35_track, filename: "Captured.mp3")
song36 = Song.create!(title: "So in Love", duration: "5:08", album_id: album6.id)
song36_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Soul+Hymns/So+in+Love.mp3')
song36.track.attach(io: song36_track, filename: "So+in+Love.mp3")
song37 = Song.create!(title: "Kindness", duration: "5:59", album_id: album6.id)
song37_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Soul+Hymns/Kindness.mp3')
song37.track.attach(io: song37_track, filename: "Kindness.mp3")
song38 = Song.create!(title: "My Portion", duration: "6:41", album_id: album6.id)
song38_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Soul+Hymns/My+Portion.mp3')
song38.track.attach(io: song38_track, filename: "My+Portion.mp3")
song39 = Song.create!(title: "Opened Up the Heavens", duration: "4:32", album_id: album6.id)
song39_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Soul+Hymns/Opened+Up+the+Heavens.mp3')
song39.track.attach(io: song39_track, filename: "Opened+Up+the+Heavens.mp3")

album7 = Album.create!(title: "Be Still. I", year: "2018", artist_id: artist6.id)
album7_photo = open('https://chillify-aa-dev.s3.amazonaws.com/album+photos/Be+Still.+I.png')
album7.photo.attach(io: album7_photo, filename: "Be+Still.+I.png")
song40 = Song.create!(title: "The Old Church Piano", duration: "6:31", album_id: album7.id)
song40_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Be+Still.+I/That+Old+Church+Piano.mp3')
song40.track.attach(io: song40_track, filename: "That+Old+Church+Piano.mp3")
song41 = Song.create!(title: "Thanksgiving", duration: "6:00", album_id: album7.id)
song41_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Be+Still.+I/Thanksgiving.mp3')
song41.track.attach(io: song41_track, filename: "Thanksgiving.mp3")
song42 = Song.create!(title: "Honesty", duration: "5:20", album_id: album7.id)
song42_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Be+Still.+I/Honesty.mp3')
song42.track.attach(io: song42_track, filename: "Honesty.mp3")
song43 = Song.create!(title: "My Soul Shall Sing", duration: "4:41", album_id: album7.id)
song43_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Be+Still.+I/My+Soul+Shall+Sing.mp3')
song43.track.attach(io: song43_track, filename: "My+Soul+Shall+Sing.mp3")
song44 = Song.create!(title: "Be Still & Know", duration: "7:48", album_id: album7.id)
song44_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Be+Still.+I/Be+Still+%26+Know.mp3')
song44.track.attach(io: song44_track, filename: "Be+Still+%26+Know.mp3")

album8 = Album.create!(title: "Be Still: My Heart", year: "2019", artist_id: artist6.id)
album8_photo = open('https://chillify-aa-dev.s3.amazonaws.com/album+photos/be+still+my+heart.png')
album8.photo.attach(io: album8_photo, filename: "be+still+my+heart.png")
song45 = Song.create!(title: "From a Broken Place", duration: "5:42", album_id: album8.id)
song45_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Be+Still%3A+My+Heart/from+a+broken+place.mp3')
song45.track.attach(io: song45_track, filename: "from+a+broken+place.mp3")
song46 = Song.create!(title: "Master and Apprentice", duration: "5:43", album_id: album8.id)
song46_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Be+Still%3A+My+Heart/master+and+apprentice.mp3')
song46.track.attach(io: song46_track, filename: "master+and+apprentice.mp3")
song47 = Song.create!(title: "New Today", duration: "5:45", album_id: album8.id)
song47_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Be+Still%3A+My+Heart/new+today.mp3')
song47.track.attach(io: song47_track, filename: "new+today.mp3")
song48 = Song.create!(title: "Cycles", duration: "5:26", album_id: album8.id)
song48_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Be+Still%3A+My+Heart/cycles.mp3')
song48.track.attach(io: song48_track, filename: "cycles.mp3")
song49 = Song.create!(title: "The Plant and the Gardener", duration: "5:16", album_id: album8.id)
song49_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Be+Still%3A+My+Heart/the+plant+and+the+gardener.mp3')
song49.track.attach(io: song49_track, filename: "the+plant+and+the+gardener.mp3")
song50 = Song.create!(title: "The Familiar Tune", duration: "5:18", album_id: album8.id)
song50_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Be+Still%3A+My+Heart/that+familiar+tune.mp3')
song50.track.attach(io: song50_track, filename: "that+familiar+tune.mp3")
song51 = Song.create!(title: "The Perfect Will Come", duration: "5:51", album_id: album8.id)
song51_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Be+Still%3A+My+Heart/the+perfect+will+come.mp3')
song51.track.attach(io: song51_track, filename: "the+perfect+will+come.mp3")

album9 = Album.create!(title: "Life", year: "2016", artist_id: artist7.id)
album9_photo = open('https://chillify-aa-dev.s3.amazonaws.com/album+photos/Life.png')
album9.photo.attach(io: album9_photo, filename: "Life.png")
song52 = Song.create!(title: "Genesis", duration: "1:24", album_id: album9.id)
song52_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Life/genesis.mp3')
song52.track.attach(io: song52_track, filename: "genesis.mp3")
song53 = Song.create!(title: "Birthday", duration: "1:15", album_id: album9.id)
song53_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Life/birthday.mp3')
song53.track.attach(io: song53_track, filename: "birthday.mp3")
song54 = Song.create!(title: "Return", duration: "1:56", album_id: album9.id)
song54_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Life/return.mp3')
song54.track.attach(io: song54_track, filename: "return.mp3")
song55 = Song.create!(title: "Bliss", duration: "1:30", album_id: album9.id)
song55_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Life/Bliss.mp3')
song55.track.attach(io: song55_track, filename: "Bliss.mp3")
song56 = Song.create!(title: "Herewego", duration: "2:14", album_id: album9.id)
song56_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Life/herewego.mp3')
song56.track.attach(io: song56_track, filename: "herewego.mp3")
song57 = Song.create!(title: "In the Clouds", duration: "1:55", album_id: album9.id)
song57_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Life/in+the+clouds.mp3')
song57.track.attach(io: song57_track, filename: "in+the+clouds.mp3")

album10 = Album.create!(title: "Transitions", year: "2020", artist_id: artist7.id)
album10_photo = open('https://chillify-aa-dev.s3.amazonaws.com/album+photos/Transitions.png')
album10.photo.attach(io: album10_photo, filename: "Transitions.png")
song58 = Song.create!(title: "introspect", duration: "1:53", album_id: album10.id)
song58_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Transitions/Introspect.mp3')
song58.track.attach(io: song58_track, filename: "Introspect.mp3")
song59 = Song.create!(title: "lemongrass", duration: "1:48", album_id: album10.id)
song59_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Transitions/Lemongrass.mp3')
song59.track.attach(io: song59_track, filename: "Lemongrass.mp3")
song60 = Song.create!(title: "ease in", duration: "2:03", album_id: album10.id)
song60_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Transitions/Ease+In.mp3')
song60.track.attach(io: song60_track, filename: "Ease+In.mp3")
song61 = Song.create!(title: "the way home", duration: "2:07", album_id: album10.id)
song61_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Transitions/The+Way+Home.mp3')
song61.track.attach(io: song61_track, filename: "The+Way+Home.mp3")
song62 = Song.create!(title: "blue haze", duration: "2:37", album_id: album10.id)
song62_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Transitions/Blue+Haze.mp3')
song62.track.attach(io: song62_track, filename: "Blue+Haze.mp3")
song63 = Song.create!(title: "misunderstood", duration: "2:23", album_id: album10.id)
song63_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Transitions/Misunderstood.mp3')
song63.track.attach(io: song63_track, filename: "Misunderstood.mp3")

# album3 = Album.create!(title: "HALO", year: "2019", artist_id: artist3.id)
# album3 = Album.create!(title: "HALO", year: "2019", artist_id: artist3.id)

song1 = Song.create!(title: "Promises", duration: "10:49", album_id: album1.id)
song1_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Mav+City+3/Promises.mp3')
song1.track.attach(io: song1_track, filename: "Promises.mp3")
song2 = Song.create!(title: "Man Of Your Word", duration: "9:05", album_id: album1.id)
song2_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Mav+City+3/Man+of+Your+Word.mp3')
song2.track.attach(io: song2_track, filename: "Man+of+Your+Word.mp3")
song3 = Song.create!(title: "Such an Awesome God", duration: "7:10", album_id: album1.id)
song3_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Mav+City+3/Such+An+Awesome+God.mp3')
song3.track.attach(io: song3_track, filename: "Such+An+Awesome+God.mp3")
song4 = Song.create!(title: "Wont Stop Now", duration: "7:04", album_id: album2.id)
song4_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Hallelujah+Here+Below/Wont+Stop+Now.mp3')
song4.track.attach(io: song4_track, filename: "Wont+Stop+Now.mp3")
song5 = Song.create!(title: "Mighty God", duration: "4:45", album_id: album2.id)
song5_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Hallelujah+Here+Below/Mighty+God.mp3')
song5.track.attach(io: song5_track, filename: "Mighty+God.mp3")
song6 = Song.create!(title: "Worthy", duration: "6:09", album_id: album2.id)
song6_track = open('https://chillify-aa-dev.s3.amazonaws.com/music/Hallelujah+Here+Below/Worthy+Live.mp3')
song6.track.attach(io: song6_track, filename: "Worthy+Live.mp3")

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



