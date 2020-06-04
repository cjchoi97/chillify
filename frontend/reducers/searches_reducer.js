import { SEARCH } from '../actions/search_actions';

const searchesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case SEARCH:
      return Object.assign({}, state, 
        {
          songs: action.term.songs, 
          albums: action.term.albums, 
          artist: action.term.artists
        }
      );
    default:
      return state;
  }
}

export default searchesReducer;