import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import {
  updateCurrentSong,
  togglePlay
} from '../../actions/music_actions';
import { withRouter } from 'react-router-dom';
import { fetchSongs } from '../../actions/song_actions';


const msp = ({ music, ui, entities }) => {
  // debugger
  const { songs } = entities;
  return {
    currentSong: music.currentSong,
    playing: music.playing,
    modal: ui.modal,
    songs: songs
  };
};

const mdp = dispatch => {
  return {
    updateCurrentSong: song => dispatch(updateCurrentSong(song)),
    togglePlay: play => dispatch(togglePlay(play)),
    fetchSongs: () => dispatch(fetchSongs())
  };
};


export default withRouter(connect(
  msp,
  mdp
)(MusicPlayer));