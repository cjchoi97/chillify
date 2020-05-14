import { connect } from 'react-redux';
import MusicPlayer from './music_player';
// import { withRouter } from 'react-router-dom';
import { fetchSongs } from '../../actions/song_actions';
import { fetchUsers } from '../../actions/user_actions';
import { togglePlay, togglePause } from '../../actions/music_actions';


const msp = ({ui, entities }) => {
  // debugger
  const { songs } = entities;
  const song = songs[ui.music.songId];
  // console.log(ui.music);
  if (!song) return {};
  return {
    song: song,
    playing: ui.music.playing,
    artist: song.artist_name
  }
};

const mdp = dispatch => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    fetchUsers: () => dispatch(fetchUsers()),
    togglePause: () => dispatch(togglePause()),
    togglePlay: () => dispatch(togglePlay())
  };
};


export default connect(
  msp,
  mdp
)(MusicPlayer);