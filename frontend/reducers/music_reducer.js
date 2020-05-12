import {
  UPDATE_CURRENT_SONG,
  UPDATE_CURRENT_ARTIST,
  TOGGLE_PLAY,
  TOGGLE_PAUSE
} from '../actions/music_actions';

const _defaultState = {
  songId: 1,
  playing: false,
}

const musicReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const musicState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_CURRENT_SONG:
      musicState.currentSong = action.song;
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