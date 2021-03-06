import React from 'react';
import { Link } from 'react-router-dom';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      dropdownId: -1
    }

    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    // this.closeDropdown = this.closeDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtists();
    this.props.fetchAlbums();
  }

  handleModalOpen(song) {
    this.props.openModal("addSongToPlaylist", song.id)
    this.setState({
      dropdownId: -1
    })
  }

  toggleDropdown(songId) {
    return(e) => {
      e.preventDefault();
      if (this.state.dropdownId === -1) {
        this.setState({
          dropdownId: songId,
          x: e.screenX - 210,
          y: e.clientY + 5
        })
      } else {
        this.setState({
          dropdownId: -1,
          x: e.screenX - 210,
          y: e.clientY + 5
        })
      }
    }
  }

  playCollection() {
    const { artist, artistSongs } = this.props;
    const fiveSongs = artistSongs.slice(0, 5);
    this.props.updateCurrentPlayAlbumId({ id: artist.id, type: "artist" })
    this.props.updateCurrentPlayAlbum([...fiveSongs]);
    if (!fiveSongs.length) return;
    if (fiveSongs.includes(this.props.currentSongId)) {
      this.props.togglePlay();
      return
    }

    if (this.props.shuffle) {
      const shuffledSongs = this.shuffle([...fiveSongs]);
      this.props.updateCurrentSong(shuffledSongs[0]);
      this.props.updateQueue(shuffledSongs.slice(1));
    } else {
      this.props.updateCurrentSong(fiveSongs[0]);
      this.props.updateQueue([...fiveSongs.slice(1)]);
    }
    this.props.togglePlay();

  }

  playSong(song) {
    const { songHistory, shuffle, artist, artistSongs } = this.props;
    const songIndex = artistSongs.indexOf(song);

    console.log(artistSongs);
    const fiveSongs = artistSongs.slice(0, 5);
    let songs = [];
    if (shuffle) {
      songs = this.shuffle(fiveSongs);
    } else {
      songs = fiveSongs;
    }

    songHistory.unshift(...songs.slice(0, songIndex).reverse());

    this.props.updateCurrentPlayAlbumId({ id: artist.id, type: "artist" });
    this.props.updateCurrentPlayAlbum(songs);
    this.props.updateQueue([...songs.slice(songIndex + 1)]);
    this.props.updateSongHistory(songHistory);
    this.props.updateCurrentSong(song);
    this.props.togglePlay();
  }

  pauseSong() {
    this.props.togglePause();
  }

  render() {
    const { 
      artist, 
      songs, 
      albums, 
      currentSongId,       
      playing,
      artistSongs,
      currentItemType,
      currentItemId,
      path
    } = this.props;
    if (!songs || !artist || !albums || artistSongs.length === 0) return null;

    const addPlayOrPauseButton = (song, green) => {
      if (currentSongId === song.id && !this.props.playing) {
        return (
          <i className={`fas fa-play song-play show ${green}`}
            onClick={() => this.playSong(song)}></i>
        )
      } else if (currentSongId === song.id && this.props.playing) {
        return (
          <i className={`fas fa-pause song-pause show ${green}`}
            onClick={this.pauseSong}></i>
        )
      } else {
        return (
          <i className={`fas fa-play song-play show ${green}`}
            onClick={() => this.playSong(song)}></i>
        )
      }
    }

    // console.log(artistSongs);
    // debugger

    const filteredSongs = artistSongs.slice(0,5).map(song => {
      // console.log(song);
      let green = "";
      let listening = "";
      if (currentSongId === song.id) {
        green = "green";
      }

      if (currentSongId === song.id && playing) {
        listening = "listening"
      }

      return (
        <div className="artist-song-item" key={song.id}>
          <div className="left-side">
            <div className="play-pause-button">
              <i className={`fas fa-music ${green} ${listening}`}></i>
              <i className={`fas fa-volume-up ${green}`} id={`${listening}`}></i>
              {addPlayOrPauseButton(song, green)}
            </div>
            <div className="img-container">
              <img src={song.album_photo_url} />
            </div>

            <div className={`song-title ${green}`}>
              {song.title}
            </div>
          </div>

          <div className="right-side">
            <div className="artist-song-item-dropdown">
              <i className="fas fa-ellipsis-h"
                  onClick={this.toggleDropdown(song.id)}></i>
              <ul className={`artist-song-dropdown-menu ${song.id === this.state.dropdownId ? "show" : "dontshow"}`}
                style={{
                  top: this.state.y,
                  left: this.state.x
                }}>
                <li className="artist-dropdown-item" onClick={() => this.handleModalOpen(song)}>
                  Add to Playlist
                </li>
              </ul>
            </div>

            <span className={`song-length ${green}`}>{song.duration}</span>
          </div>
        </div>
      )
    });

    const filteredAlbums = Object.values(albums).map(album => {

      if (album.artist_id === artist.id) {
        return (
          <div className="artist-album-item" key={album.id}>
            <div className="img-container">
              <img src={album.photoUrl} />
              <div className="modal">
                <i className="far fa-play-circle"></i>
              </div>
            </div>
            <Link to={`/albums/${album.id}`} className="album-title">{album.title}</Link>
          </div>
        )
      }
    })

    const greenPlayOrPause = () => {
      path[1] = path[1].substring(0, path[1].length - 1);

      if (path[1] === currentItemType && artist.id === currentItemId && playing) {
        return (
          <>
            <button className="play-item-button" onClick={this.pauseSong}>
              <i className="fas fa-pause"></i>
            </button>
          </>
        )
      } else {
        return (
          <>
            <button className="play-item-button" onClick={() => this.playCollection()}>
              <i className="fas fa-play"></i>
            </button>
          </>
        )
      }
    }

    return (
      <div className="artist-page-container">
        <div className="artist-info" style={{
          backgroundImage: `url(${artist.photoUrl})`
        }}>
          <div className="verified">
            <svg width="24" height="24" viewBox="0 0 24 24" 
            fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.6596l-3.38079 1.8543-1.84158-3.3877-3.84662-.2679.28231-3.8456-3.09118-2.3049 
              2.31658-3.0825-1.3543-3.61028 3.61534-1.34071.81255-3.76935 3.76627.82672L12 0l2.7214 2.73168 
              3.7663-.82672.8125 3.76935 3.6154 1.34071-1.3543 3.61028 2.3166 3.0825-3.0912 2.3049.2823 
              3.8456-3.8466.2679-1.8416 3.3877L12 21.6596z" fill="#2E77D0"></path>
              <path d="M16.8637 7.41226l-6.6435 7.77824-2.80421-3.2842-.4935.5775 3.29771 3.8617 
              7.2135-8.44649-.57-.48675z" fill="#fff"></path>
            </svg>
            <span>VERIFIED ARTIST</span> 
          </div>
          <h1>{artist.name}</h1>
        </div>
        <div className="middle-buttons">
          {greenPlayOrPause()}
          <button className="follow-button" onClick={() => this.props.followArtist(artist.id)}>
            Follow
          </button>
        </div>

        <div className="songs-albums">

          <div className="artist-songs-container">
            <h1>Songs</h1>
            <div className="artist-songs">
              {filteredSongs}
            </div>
          </div>

          <div className="artist-albums-container">
            <h1>Albums</h1>
            <div className="artist-albums">
              {filteredAlbums}
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ArtistShow;