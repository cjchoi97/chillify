import * as PlaylistAPIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const REMOVE_SONG = "REMOVE_SONG";
export const ADD_SONG = "ADD_SONG";


const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

const removePlaylist = () => ({
  type: REMOVE_PLAYLIST,
});

export const fetchPlaylists = () => dispatch => (
  PlaylistAPIUtil.fetchPlaylists().then(playlists => (
    dispatch(receivePlaylists(playlists))
  ))
);

export const fetchAuthoredPlaylists = id => dispatch => (
  PlaylistAPIUtil.fetchAuthoredPlaylists(id).then(playlists => (
    dispatch(receivePlaylists(playlists))
  ))
);

export const fetchPlaylist = id => dispatch => (
  PlaylistAPIUtil.fetchPlaylist(id).then(playlist => (
    dispatch(receivePlaylist(playlist))
  ))
);

export const deletePlaylist = id => dispatch => (
  PlaylistAPIUtil.deletePlaylist(id).then(() => (
    dispatch(removePlaylist())
  ))
);

export const createPlaylist = playlist => dispatch => (
  PlaylistAPIUtil.createPlaylist(playlist).then(playlist => (
    dispatch(receivePlaylist(playlist))
  ))
);

export const updatePlaylist = id => dispatch => (
  PlaylistAPIUtil.updatePlaylist(id).then(playlist => (
    dispatch(receivePlaylist(playlist))
  ))
);

export const addSong = (playlistId, songId) => dispatch => (
  PlaylistAPIUtil.addSong(playlistId, songId).then(playlist => (
    dispatch(receivePlaylist(playlist))
  ))
);

export const removeSong = (playlistId, songId) => dispatch => (
  PlaylistAPIUtil.removeSong(playlistId, songId).then(playlist => (
    dispatch(receivePlaylist(playlist))
  ))
);

