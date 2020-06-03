import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import musicReducer from './music_reducer';
import searchesReducer from './searches_reducer'

const uiReducer = combineReducers({
  modal: modalReducer,
  music: musicReducer,
  searches: searchesReducer

});

export default uiReducer;