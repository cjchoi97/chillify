json.extract! artist, :id, :name
json.songIds artist.song_ids
json.albumIds artist.album_ids
json.username artist.name
json.photoUrl url_for(artist.photo)