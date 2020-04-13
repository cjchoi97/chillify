json.extract! album, :id, :title, :year, :artist_id
json.coverUrl url_for(album.cover)
json.songIds album.song_ids