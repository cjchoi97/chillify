import {
  RECEIVE_ARTISTS,
  RECEIVE_ARTIST,
  TOGGLE_FOLLOW
} from '../actions/artist_actions';

const artistReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTISTS:
      return action.artists;
    case RECEIVE_ARTIST:
      return Object.assign({}, state, { [action.artist.id]: action.artist } )
    case TOGGLE_FOLLOW:
      return Object.assign({}, state, { [action.value.id]: action.value} );
    default:
      return state;
  }
}

export default artistReducer;