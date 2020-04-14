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

export const updatePlaylist = id => (
  $.ajax({
    method: 'PATCH',
    url: `/api/playlists/${id}`,
    data: {playlist_id: }
  })
);
export const deletePlaylist = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${id}`
  })
);

export const addSong = (playlistId, songId) => (
  $.ajax({
    method: 'POST',
    url: `/api/playlists/${playlistId}/add_song`,
    data: {song_id: songId}
  })
);

export const removeSong = (playlistId, songId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${playlistId}/remove_song`,
    data: {song_id: songId}
  })
);
