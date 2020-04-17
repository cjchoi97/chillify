import {
  UPDATE_CURRENT_SONG,
  TOGGLE_PLAY
} from '../actions/music_actions';

const _defaultState = {
  currentSong: {
    title: '',
    song_url: ''
  },
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
      musicState.playing = action.play;
      return musicState;
    default:
      return state;
  }
}

export default musicReducer;