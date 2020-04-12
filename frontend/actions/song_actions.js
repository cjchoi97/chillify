import * as SongAPIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";

const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const fetchSongs = () => dispatch => (
  SongAPIUtil.fetchSongs().then(songs => (
    dispatch(receiveSongs(songs))
  ))
);

