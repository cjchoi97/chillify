import { connect } from 'react-redux';
import MusicPlayer from './music_player';
// import { withRouter } from 'react-router-dom';
import { fetchSongs } from '../../actions/song_actions';
import { fetchUsers } from '../../actions/user_actions';


const msp = ({ui, entities }) => {
  // debugger
  const { songs } = entities;
  const song = songs[ui.music.songId];
  return {
    song: song,
    playing: ui.music.playing,
    artist: song.artist_name
  }
};

const mdp = dispatch => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    fetchUsers: () => dispatch(fetchUsers())
  };
};


export default connect(
  msp,
  mdp
)(MusicPlayer);