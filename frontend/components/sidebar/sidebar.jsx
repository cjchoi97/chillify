import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../util/session_api_util';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      request: "dontcreate"
    }
  }
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header-logo">
          <img
            src="https://chillify-aa-dev.s3.amazonaws.com/chillifylogo.png"
            height="80"
          />
        </div>

        <ul className="sidebar-nav-links">
          <li><Link to="/explore">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/collection/playlists">Library</Link></li>
        </ul>

        <div className="create-playlist">
          <button
            onClick={() => this.props.openModal('createPlaylist')}
            className="side-playlist-create-btn"
          >
            <i className="fas fa-plus-square"></i>
            <span className="create-playlist-text">Create Playlist</span>
          </button>
        </div>

        <div className="sidebar-playlists">
          {/* get your created and liked playlists */}
        </div>
      </div>
    );
  }
}

const mdp = dispatch => {
  return ({
    openModal: modal => dispatch(openModal(modal))
  })
}

export default connect(
  null,
  mdp
)(Sidebar);