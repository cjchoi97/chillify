import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  togglePlay, 
  togglePause, 
  updateCurrentSong } from '../../../../actions/music_actions';
import { addSongToPlaylist } from '../../../../actions/playlist_song_actions'
import { openModal } from '../../../../actions/modal_actions';

class SongResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      playshow: "show",
      pauseshow: "dontshow",
      dropdownId: -1,
      playing: ""
    }

    this.handlePlay = this.handlePlay.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.setPlaying = this.setPlaying.bind(this);
  }

  toggleDropdown(songId) {
    return (e) => {
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

  handlePlay(song) {
    this.props.updateCurrentSong(song);
    this.props.togglePlay();
    this.setState({
      pauseshow: "show",
      playshow: "dontshow",
    })
  }

  handlePause() {
    this.props.togglePause();
    this.setState({
      pauseshow: "dontshow",
      playshow: "show"
    })
  }

  handleModalOpen(song) {
    this.props.openModal("addSongToPlaylist", song.id);
    this.setState({
      dropdownId: -1
    })
  }

  setPlaying() {
    this.setState({
      playing: "playing"
    })
  }

  render() {
    const { songs, currentSongId, playing } = this.props;

    const playOrPause = (song) => {
      if (currentSongId === song.id && this.props.playing) {
        return (
          <button className={`play-item-button show`} onClick={this.handlePause}>
            <i className="fas fa-pause"></i>
          </button>
        )
      } else {
        return (
          <button className={`play-item-button show`} onClick={() => this.handlePlay(song)}>
            <i className="fas fa-play"></i>
          </button>
        )
      }
    }

    if (!songs) return null;
  
    let items = Object.values(songs).map(song => {
      return (
        <div className={`search-song-item ${song.id === currentSongId && playing ? "playing": ""}`} key={song.id}>
          <div className="left-side">
            <div className="img-container">
              <div className="song-img-modal">
                {playOrPause(song)}
              </div>
              <img src={song.album_photo_url} />
            </div>
            <div className="search-song-info">
              <Link to={`/albums/${song.album_id}`} className="search-song-title"> 
                {song.title}
              </Link>
              <Link to={`/artists/${song.artist_id}`} className="search-song-artist">
                {song.artist_name}
              </Link>
            </div>
          </div>
  
          <div className="search-song-dropdown">
            <i className="fas fa-ellipsis-h" 
              onClick={this.toggleDropdown(song.id)}></i>
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
      );
    });
  
    return (
      <>
        <h1>Songs</h1>
        <div className="song-results">
          {items}
        </div>
      </>
    )
  }
}

const msp = (state, ownProps) => {
  return {
    songs: ownProps.songs,
    currentSongId: state.ui.music.songId,
    playing: state.ui.music.playing
  }
}

const mdp = dispatch => {
  return {
    togglePause: () => dispatch(togglePause()),
    togglePlay: () => dispatch(togglePlay()),
    updateCurrentSong: song => dispatch(updateCurrentSong(song)),
    addSongToPlaylist: playlistSong => dispatch(addSongToPlaylist(playlistSong)),
    openModal: (modal, song) => dispatch(openModal(modal, song))
  }
}

export default connect(
  msp,
  mdp
)(SongResults);