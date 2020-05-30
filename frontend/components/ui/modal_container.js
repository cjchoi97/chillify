import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  if (!state.ui.modal) return {};
  return {
    modal: state.ui.modal.modal,
    songId: state.ui.modal.songId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);