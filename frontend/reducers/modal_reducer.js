import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = null, action) => {
  Object.freeze(state); 
  // console.log(action.songId);
  switch (action.type) {
    case OPEN_MODAL:
      if (action.modal === "addSongToPlaylist"){
        return Object.assign({}, state, {modal: action.modal, songId: action.song});
      } else {
        return Object.assign({}, state, { modal: action.modal});
      }

    case CLOSE_MODAL:
      return null;
    default:
      return state;
  };
};

export default modalReducer;