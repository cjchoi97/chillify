import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
// import { fetchArtists } from '../../actions/artist_actions';
// import { fetchUsers } from '../../actions/user_actions';
import { Link } from 'react-router-dom'


class Explore extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAlbums();
    this.props.fetchPlaylists();
  }

  render() {
    const { albums, playlists } = this.props
    const albumItems = albums.map(album => {
      return (
        <Link className="item" key={album.id} to={`/albums/${album.id}`}>
          <img src={album.photoUrl} />
          <div className="item-title">{album.title}</div>
          <div className="item-creator album">
            <Link to={`/artists/${album.artist_id}`} className="item-creator">{album.artist_name}</Link>
          </div>
        </Link>
      );
    });

    const playlistItems = playlists.map(playlist => {
      return (
        <Link className="item" key={playlist.id} to={`/playlists/${playlist.id}`}>
          <img src={playlist.photoUrl} />
          <div className="item-title">{playlist.title}</div>
          <div className="item-creator">By {playlist.user_name}</div>
        </Link>
      );
    });
    return (
      <div className="explore">
        <h1>Albums For You</h1>
        <div className="explore-section">
          {albumItems}
        </div>

        <h1>Playlists For You</h1>
        <div className="explore-section">
          {playlistItems}
        </div>
      </div>
    );
  }
}

const msp = state => {
  const { users, artists, playlists, albums } = state.entities
  return ({
    playlists: Object.values(playlists),
    albums: Object.values(albums),
    users: users,
    artists: artists

  });
}

const mdp = dispatch => {
  return ({
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    // fetchArtists: () => dispatch(fetchArtists()),
    // fetchUsers: () => dispatch(fetchUsers())
  });
}

export default connect(
  msp,
  mdp
)(Explore);