import { RECEIVE_SONGS } from '../actions/song_actions';
// import { SEARCH } from '../actions/search_actions';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SONGS:
      return action.songs;
    // case SEARCH:
    //   return action.term.songs || {};
    default:
      return state;
  }
}

export default songsReducer;


