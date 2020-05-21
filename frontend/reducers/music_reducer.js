import {
  UPDATE_CURRENT_SONG,
  TOGGLE_PLAY,
  TOGGLE_PAUSE
} from '../actions/music_actions';

const _defaultState = {
  songId: 139,
  playing: false,
}

const musicReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const musicState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_CURRENT_SONG:
      console.log("changing song to:" + action.song.id);
      musicState.songId = action.song.id;
      return musicState;
    case TOGGLE_PLAY:
      musicState.playing = true;
      return musicState;
    case TOGGLE_PAUSE:
      musicState.playing = false;
      return musicState;
    default:
      return state;
  }
}

export default musicReducer;