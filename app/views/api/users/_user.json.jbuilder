json.extract! user, :id, :email, :username, :preferred_name
json.playlistIds user.playlist_ids
json.followedArtists user.followed_artist_ids