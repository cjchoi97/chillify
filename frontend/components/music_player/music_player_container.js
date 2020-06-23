import { connect } from 'react-redux';
import MusicPlayer from './music_player';
// import { withRouter } from 'react-router-dom';
import { fetchSongs } from '../../actions/song_actions';
import { fetchUsers } from '../../actions/user_actions';
import { 
  togglePlay, 
  togglePause, 
  updateSongHistory, 
  updateCurrentSong, 
  updateQueue 
} from '../../actions/music_actions';

const msp = ({ui, entities }) => {
  // debugger
  const { songs } = entities;
  const song = songs[ui.music.songId];
  return {
    songs: songs,
    song: song,
    playing: ui.music.playing,
    currentSongId: ui.music.songId,
    queue: ui.music.queue,
    songHistory: ui.music.songHistory
  }
};

const mdp = dispatch => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    fetchUsers: () => dispatch(fetchUsers()),
    togglePause: () => dispatch(togglePause()),
    togglePlay: () => dispatch(togglePlay()),
    updateCurrentSong: (song) => dispatch(updateCurrentSong(song)),
    updateQueue: (queue) => dispatch(updateQueue(queue)),
    updateSongHistory: (history) => dispatch(updateSongHistory(history))
  };
};


export default connect(
  msp,
  mdp
)(MusicPlayer);