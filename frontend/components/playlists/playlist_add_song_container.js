import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import { addSongToPlaylist } from '../../actions/playlist_song_actions';
import AddSongToPlaylist from './playlist_add_song';
// import PlaylistCreate from './playlist_create_container';
import { fetchPlaylists } from '../../actions/playlist_actions';

const msp = state => {
  const playlists = state.entities.playlists;
  const currentUser = state.entities.users[state.session.id];
  return {
    playlists: playlists,
    currentUser: currentUser
  }
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    openModal: modal => dispatch(openModal(modal)),
    addSongToPlaylist: playlistSong => dispatch(addSongToPlaylist(playlistSong))
  }
}

export default connect(
  msp,
  mdp
)(AddSongToPlaylist);