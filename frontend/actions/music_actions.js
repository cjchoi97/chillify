export const UPDATE_CURRENT_SONG = "UPDATE_CURRENT_SONG";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const TOGGLE_PAUSE = "TOGGLE_PAUSE";

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
}