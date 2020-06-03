import {
  RECEIVE_ARTISTS,
  RECEIVE_ARTIST
} from '../actions/artist_actions';

// import { SEARCH } from '../actions/search_actions'; 

const artistReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTISTS:
      return action.artists;
    case RECEIVE_ARTIST:
      return Object.assign({}, state, { [action.artist.id]: action.artist } )
    // case SEARCH:
    //   return action.term.artists || {};
    default:
      return state;
  }
}

export default artistReducer;