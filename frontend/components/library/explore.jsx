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
        <li className="item" key={album.id}>
          <h2>{album.title}</h2>
          <img src={album.photoUrl} />
        </li>
      );
    });

    const playlistItems = playlists.map(playlist => {
      return (
        <li className="item" key={playlist.id}>
          <h2>{playlist.title}</h2>
          <img src={playlist.photoUrl} />
        </li>
      );
    });
    return (
      <div className="explore">
        <span>Albums For You</span>
        <ul className="explore-albums">
          {albumItems}
        </ul>

        <span>Playlists For You</span>
        <ul className="explore-playlists">
          {playlistItems}
        </ul>
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