import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions';

import Root from './components/root';

import configureStore from './store/store';

import {fetchAlbum, fetchAlbums} from './util/album_api_util';
import {fetchArtist, fetchArtists} from './util/artist_api_util';
import {
  fetchPlaylist, 
  fetchPlaylists, 
  addSong, 
  removeSong,
  createPlaylist,
  deletePlaylist
} from './util/playlist_api_util';
import {fetchSongs} from './util/song_api_util';
import {fetchUser} from './util/user_api_util';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //////////////// TEST ////////////////////////
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;

  window.fetchAlbum = fetchAlbum
  window.fetchAlbums = fetchAlbums

  window.fetchArtist = fetchArtist
  window.fetchArtists = fetchArtists

  window.fetchPlaylist = fetchPlaylist
  window.fetchPlaylists = fetchPlaylists
  window.deletePlaylist = deletePlaylist
  window.createPlaylist = createPlaylist
  window.addSong = addSong
  window.removeSong = removeSong

  window.fetchSongs = fetchSongs
  window.fetchUser = fetchUser

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //////////////////////////////////////////////
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});