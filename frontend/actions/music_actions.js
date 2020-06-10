export const UPDATE_CURRENT_SONG = "UPDATE_CURRENT_SONG";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const TOGGLE_PAUSE = "TOGGLE_PAUSE";
export const UPDATE_HISTORY = "UPDATE_HISTORY";
export const UPDATE_QUEUE = "UPDATE_QUEUE";
export const ADD_TO_QUEUE = "ADD_TO_QUEUE";

export const updateCurrentSong = song => {
  return {
    type: UPDATE_CURRENT_SONG,
    song
  }
};

export const togglePlay = () => {
  return {
    type: TOGGLE_PLAY,
  }
};

export const togglePause = () => {
  return {
    type: TOGGLE_PAUSE,
  }
};

export const updateSongHistory = history => {
  return {
    type: UPDATE_HISTORY,
    history
  }
};

export const updateQueue = queue => {
  return {
    type: UPDATE_QUEUE,
    queue
  }
}

export const addSongsToQueue = songs => {
  return {
    type: ADD_TO_QUEUE,
    songs
  }
}