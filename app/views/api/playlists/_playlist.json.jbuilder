json.extract! playlist, :id, :user_id, :title, :private
if !playlist.photo.attached?
  json.photoUrl url_for('https://chillify-aa-dev.s3.amazonaws.com/defaultphoto.png')
else
  json.photoUrl url_for(playlist.photo)
end
json.creator_id playlist.user_id
json.songIds playlist.song_ids