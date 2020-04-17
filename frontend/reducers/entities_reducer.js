import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import songsReducer from './songs_reducer';
import albumsReducer from './albums_reducer';
import playlistsReducer from './playlists_reducer';
import artistReducer from './artists_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  albums: albumsReducer,
  playlists: playlistsReducer,
  artists: artistReducer
});

export default entitiesReducer;
