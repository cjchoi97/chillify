json.extract! song, :title, :id, :album_id
json.artist_id song.artist.id
json.artist_name song.artist.name
json.album_title song.album.title
json.song_url url_for(song.track) if song.track.attached?
json.album_photo_url url_for(song.album.photo)