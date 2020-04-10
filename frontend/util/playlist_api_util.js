export const fetchPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: '/api/playlists'
  })
);

export const fetchPlaylist = id => (
  $.ajax({
    method: 'GET',
    url: `/api/playlists/${id}`
  })
);

export const createPlaylist = playlist => (
  $.ajax({
    method: 'POST',
    url: '/api/playlists',
    data: {playlist}
  })
);

export const updatePlaylist = playlist => (
  $.ajax({
    method: 'PATCH',
    url: `/api/playlists/${playlist.id}`,
    data: {playlist_id: playlist}
  })
);
export const deletePlaylist = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${id}`
  })
);

export const addSong = (playlist, song) => (
  $.ajax({
    method: 'POST',
    url: `/api/playlists/${playlist.id}/add_song`,
    data: {song_id: song.id}
  })
);

export const removeSong = (playlist, song) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${playlist.id}/remove_song`,
    data: {song_id: song.id}
  })
);
