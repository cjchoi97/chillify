import React from 'react';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      dropdownId: -1
    }
  }

  componentDidMount() {
    this.props.fetchArtists();
    this.props.fetchAlbums();
  }

  render() {
    const { artist, songs, albums } = this.props;
    if (!songs || !artist || !albums) return null;

    const filteredSongs = Object.values(songs).map(song => {
      if (song.artist_id === artist.id) {

        return (
          <div className="artist-song-item" key={song.id}>
            <div className="left-side">
              <div className="play-pause-button">
  
              </div>
              <div className="img-container">
                <img src={song.photoUrl} />
              </div>
  
              <div className="song-title">
                {song.title}
              </div>
            </div>
  
            <div className="right-side">
              <div className="artist-song-item-dropdown">
                <i className="fas fa-ellipsis-h"
                  ></i>
                <ul className={`search-song-dropdown-menu ${song.id === this.state.dropdownId ? "show" : "dontshow"}`}
                  style={{
                    top: this.state.y,
                    left: this.state.x
                  }}>
                  <li className="search-dropdown-item" onClick={() => this.handleModalOpen(song)}>
                    Add to Playlist
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    });

    const filteredAlbums = Object.values(albums).map(album => {

      if (album.artist_id === artist.id) {
        return (
          <div className="artist-album-item" key={album.id}>
            <div className="img-container">
              <img src={album.photoUrl} />
              <div className="modal">

              </div>
            </div>
            <span className="album-title">{album.title}</span>
          </div>
        )
      }
    })

    return (
      <div className="artist-page-container">
        <div className="artist-info">
          <h1>{artist.name}</h1>
        </div>
        <div className="middle-buttons">
          <button className="play-item-button">
            <i className="fas fa-play"></i>
          </button>
          <button className="follow-button">
            Follow
          </button>
        </div>

        <div className="songs-albums">
          <div className="artist-songs">
            {filteredSongs}
          </div>

          <div className="artist-albums">
            {filteredAlbums}
          </div>
        </div>
      </div>
    )
  }
}

export default ArtistShow;