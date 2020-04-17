import { connect } from 'react-redux';
import PlaylistCreate from './playlist_create';
import { createPlaylist, fetchAuthoredPlaylists, fetchPlaylists } from '../../actions/playlist_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.id];
  return {
    playlist: { title: ''},
    formType: 'create',
    currentUser: currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: playlist => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal()),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistCreate));