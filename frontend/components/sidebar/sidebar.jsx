import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../util/session_api_util';
import { fetchUser } from '../../actions/user_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      request: "dontcreate"
    }
  }

  componentDidMount() {
    this.props.fetchPlaylists()
    this.props.fetchUser(this.props.currentUserId);
  }

  componentDidUpdate(prevProps) {
    if (Object.values(this.props.playlists).length !== Object.values(prevProps.playlists).length) {
      this.props.fetchUser(this.props.currentUserId);
    }
  }

  render() {

    const { playlists } = this.props

    const indexItems = playlists.map(playlist => {
      if (!playlist) return null;
      return (
        <li className="sidebar-playlist-item" key={playlist.id}>
          <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
        </li>
      );
    });

    return (
      <div className="sidebar">
        <div className="sidebar-header-logo">
          <img
            src="https://chillify-aa-dev.s3.amazonaws.com/chillifylogo.png"
            height="80"
          />
        </div>


        <ul className="sidebar-nav-links">
          <li>
            <Link to="/explore">
              <i className="fas fa-home"></i>
              Home
            </Link>
          </li>
          <li>
            <Link to="/search">
              <i className="fas fa-search"></i>
              Search
            </Link>
          </li>
          <li>
            <Link to="/collection/playlists">
              <i className="fas fa-book-open"></i>
              Library
            </Link>
          </li>
        </ul>

        <h2 className="divider-text">Playlists</h2>

        <div className="create-playlist">
          <button
            onClick={() => this.props.openModal('createPlaylist')}
            className="side-playlist-create-btn"
          >
            <i className="fas fa-plus-square"></i>
            <span className="create-playlist-text">Create Playlist</span>
          </button>
        </div>

        <ul className="sidebar-playlists">
          {indexItems}
          {/* get your created and liked playlists */}
        </ul>
      </div>
    );
  }
}

const msp = state => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const { playlists } = state.entities;
  const userPlaylists = Object.values(playlists).length > 0 ? currentUser.playlistIds.map(id => {
    return playlists[id]
  }) : [];
  return ({
    playlists: userPlaylists,
    currentUserId: currentUserId
  })
}

const mdp = dispatch => {
  return ({
    openModal: modal => dispatch(openModal(modal)),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchPlaylists: () => dispatch(fetchPlaylists())
  })
}

export default connect(
  msp,
  mdp
)(Sidebar);