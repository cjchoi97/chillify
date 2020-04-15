import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';


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
        <div className="item" key={album.id}>
          <img src={album.photoUrl} />
          <div>{album.title}</div>
        </div>
      );
    });

    const playlistItems = playlists.map(playlist => {
      return (
        <div className="item" key={playlist.id}>
          <img src={playlist.photoUrl} />
          <div>{playlist.title}</div>
        </div>
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
  return ({
    playlists: Object.values(state.entities.playlists),
    albums: Object.values(state.entities.albums)
  });
}

const mdp = dispatch => {
  return ({
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchPlaylists: () => dispatch(fetchPlaylists())
  });
}

export default connect(
  msp,
  mdp
)(Explore);