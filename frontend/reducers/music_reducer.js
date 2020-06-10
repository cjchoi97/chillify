import {
  UPDATE_CURRENT_SONG,
  TOGGLE_PLAY,
  TOGGLE_PAUSE,
  UPDATE_HISTORY,
  UPDATE_QUEUE,
  ADD_TO_QUEUE
} from '../actions/music_actions';

const _defaultState = {
  songId: 1,
  playing: false,
  songHistory: [],
  queue: []
}

const musicReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const musicState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_CURRENT_SONG:
      // console.log("changing song to:" + action.song.id);
      musicState.songId = action.song.id;
      return musicState;
    case TOGGLE_PLAY:
      musicState.playing = true;
      return musicState;
    case TOGGLE_PAUSE:
      musicState.playing = false;
      return musicState;
    case UPDATE_HISTORY:
      musicState.songHistory = action.history;
      return musicState;
    case UPDATE_QUEUE:
      musicState.queue = action.queue;
      return musicState
    case ADD_TO_QUEUE:
      musicState.queue = musicState.queue.concat(action.songs);
      return musicState;
    default:
      return state;
  }
}

export default musicReducer;