import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM
} from '../actions/album_actions';

// import { SEARCH } from '../actions/search_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALBUMS:
      // return action.albums;
      return Object.assign({}, state, action.albums);
    case RECEIVE_ALBUM:
      return Object.assign({}, state, { [action.album.id]: action.album });
    
    // case SEARCH:
    //   return action.term.albums || {};
    default:
      return state
  }
}

export default albumsReducer;