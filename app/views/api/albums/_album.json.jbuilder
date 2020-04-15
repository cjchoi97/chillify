json.extract! album, :id, :title, :year, :artist_id
json.photoUrl url_for(album.photo)
json.songIds album.song_ids