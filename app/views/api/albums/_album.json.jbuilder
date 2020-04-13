json.extract! album, :id, :title, :year, :artist_id
json.photoUrl url_for(album.cover)
json.songIds album.song_ids