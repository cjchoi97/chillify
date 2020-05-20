import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import musicReducer from './music_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  music: musicReducer

});

export default uiReducer;