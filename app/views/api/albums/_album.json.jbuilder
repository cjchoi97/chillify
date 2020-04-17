json.extract! album, :id, :title, :year, :artist_id
json.photoUrl url_for(album.photo)
json.songIds album.song_ids
json.artist_id album.artist.id
json.user_id album.artist.id
json.artist_name album.artist.name