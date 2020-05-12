export const UPDATE_CURRENT_SONG = "UPDATE_CURRENT_SONG";
export const UPDATE_CURRENT_ARTIST = "UPDATE_CURRENT_ARTIST";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const TOGGLE_PAUSE = "TOGGLE_PAUSE";

export const updateCurrentSong = song => {
  return {
    type: UPDATE_CURRENT_SONG,
    song
  }
};

export const togglePlay = play => {
  return {
    type: TOGGLE_PLAY,
    play
  }
};

export const togglePause = play => {
  return {
    type: TOGGLE_PAUSE,
    play
  }
}