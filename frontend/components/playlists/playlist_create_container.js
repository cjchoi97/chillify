import { connect } from 'react-redux';
import PlaylistCreate from './playlist_create';
import { createPlaylist } from '../../actions/playlist_actions';

const msp = state => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  return {
    currentUser: currentUser
  }
}

const mdp = dispatch => {
  return ({
    createPlaylist: playlist => dispatch(createPlaylist(playlist))
  });
}

export default connect(
  msp,
  mdp
)(PlaylistCreate);