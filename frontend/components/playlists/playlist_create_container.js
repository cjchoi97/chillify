import { connect } from 'react-redux';
import PlaylistCreate from './playlist_create';
import { createPlaylist } from '../../actions/playlist_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    playlist: { title: ''},
    formType: 'create'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: playlist => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistCreate));