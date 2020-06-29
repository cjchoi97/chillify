export const UPDATE_CURRENT_SONG = "UPDATE_CURRENT_SONG";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const TOGGLE_PAUSE = "TOGGLE_PAUSE";
export const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";
export const TOGGLE_REPEAT = "TOGGLE_REPEAT";
export const UPDATE_HISTORY = "UPDATE_HISTORY";
export const UPDATE_QUEUE = "UPDATE_QUEUE";
export const ADD_TO_QUEUE = "ADD_TO_QUEUE";
export const UPDATE_CURRENT_PLAYLIST_ALBUM = "UPDATE_CURRENT_PLAYLIST_ALBUM"

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

export const toggleShuffle = (value) => {
  return {
    type: TOGGLE_SHUFFLE,
    value
  }
}

export const toggleRepeat = (value) => {
  return {
    type: TOGGLE_REPEAT,
    value
  }
}

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

export const updateCurrentPlayAlbum = item => {
  return {
    type: UPDATE_CURRENT_PLAYLIST_ALBUM,
    item
  }
}