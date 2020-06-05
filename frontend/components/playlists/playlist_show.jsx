import React from 'react';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: "closed",
      playshow: "show",
      pauseshow: "dontshow",
      songDropdown: "dontshow",
      dropdownId: -1,
      x: 0,
      y: 0
    }

    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.toggleSongDropdown = this.toggleSongDropdown.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.listOptions = this.listOptions.bind(this);
  }

  closeDropdown() {
    if (this.state.dropdown === "open") 
      this.setState({dropdown: "closed"});
    
    if (this.state.songDropdown === "show") 
      this.setState({
        songDropdown: "dontshow",
        dropdownId: -1
      });
  }

  handleDelete() {
    const { deleteItem, item } = this.props;
    deleteItem(item.id).then(() => this.props.history.push("/explore"));
  }

  toggleDropdown(e) {
    if (this.state.dropdown === "closed") {
      this.setState({ 
        dropdown: "open",
        x: e.screenX,
        y: e.clientY + 5
      });
    } else {
      this.setState({ 
        dropdown: "closed",
        x: e.screenX,
        y: e.clientY + 5
      });
    }
  }

  toggleSongDropdown(songId) {
    return (e) => {
      e.preventDefault();
      if (this.state.songDropdown === "dontshow") {
        this.setState({
          songDropdown: "show",
          x: e.screenX - 210,
          y: e.clientY + 5,
          dropdownId: songId
        })
      } else {
        this.setState({
          songDropdown: "dontshow",
          x: e.screenX - 210,
          y: e.clientY + 5,
          dropdownId: -1
        })
      }
    }
  } 

  playSong(song) {
    console.log(song.title);
    this.props.updateCurrentSong(song);
    this.props.togglePlay();
    this.setState({
      playshow: "dontshow",
      pauseshow: "show"
    })
  }

  pauseSong() {
    this.props.togglePause();
    this.setState({
      playshow: "show",
      pauseshow: "dontshow"
    })
  }

  handleModalOpen(song) {
    this.props.openModal("addSongToPlaylist", song.id);
  }

  componentDidMount() {
    this.props.fetchItems();
    // this.props.fetchSongs();
    this.props.fetchCreators();
  }

  listOptions(song) {
    // debugger
    if (this.props.type === "album") {
      return (
        <li className="navbar-menu-item" onClick={() => this.handleModalOpen(song)}>
          Add to Playlist
        </li>
      )
    } 
    if (this.props.type === "playlist") {
      return (
        <>
          <li className="navbar-menu-item" onClick={() => this.handleModalOpen(song)}>
            Add to Playlist
          </li>
          <li className="navbar-menu-item" onClick={() => this.props.removeSongFromPlaylist(song.id, this.props.item.id)}>
            Remove from this playlist
          </li>
        </>
      )
    }
  }

  render() {
    const { 
      item, 
      creators,
      songs,
      type,
      currentSongId,
      playing,
    } = this.props
    if (!item) return null;
    
    const filteredSongs = Object.values(songs).length > 0 ? item.songIds.map(id => {
      return songs[id]
    }) : [];
    
    const creator = creators[item.user_id];

    if (!creator) return null;
    // debugger

    const addPlayOrPauseButton = (song, green) => {
      if (currentSongId === song.id && !this.props.playing) {
        return(
          <i className={`fas fa-play song-play show ${green}`}
            onClick={() => this.playSong(song)}></i>
        )
      } else if (currentSongId === song.id && this.props.playing) {
        return(
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


    const songItems = filteredSongs.map((song, i) => {
      let green = "";
      let listening = "";
      if (currentSongId === song.id) {
        green = "green";
      } 
      
      if (currentSongId === song.id && playing) {
        listening = "listening"
      }
      return (
        <li className="songs" key={i} tabIndex="1">
          <div className="song-content">
            <div className="song-content-left">
              <i className={`fas fa-music ${green} ${listening}`}></i>
              <i className={`fas fa-volume-up ${green}`} id={`${listening}`}></i>
              {addPlayOrPauseButton(song, green)}
              <div className="song-info">
                <div className={`song-title ${green}`}>{song.title}</div>
                <div className="song-creator-info">
                  <span className="song-artist">
                    { song.artist_name }
                  </span>
                  <span className="dot">•</span>
                  <span className="song-album">
                    { song.album_title }
                  </span>
                </div>
              </div>
            </div>
            <div className="song-content-right">
              <i className="fas fa-ellipsis-h" onClick={this.toggleSongDropdown(song.id)}></i>
              <ul className={`add-song-dropdown ${song.id === this.state.dropdownId ? "show" : "dontshow"}`} style={{
                top: this.state.y,
                left: this.state.x
              }}>
                {this.listOptions(song)}
                {/* <li className="navbar-menu-item" onClick={() => this.props.openModal("addSongToPlaylist", song.id)}>
                  Add to Playlist
                </li> */}
              </ul>
              <span className={`song-length ${green}`}>{song.duration}</span>
            </div>
          </div>
        </li>
      );
    });
    // console.log(currentSongId);

    return (
      
      <div className="items-show-page" onClick={this.closeDropdown}>
        <div className="img-and-info">
          <img src={item.photoUrl} />
          <div className="item-information">
              <span className="item-type">{type}</span>
              <span className="item-name">{item.title}</span>
              <div className="creator-year-time">
                <div className="creator"><span>{creator.username}</span></div>
                <span className="dot">•</span>
                <span className="total-duration">0m 0s</span>
              </div>
              
            {/* <div className="item-size">
              {filteredSongs.length} SONGS
            </div> */}
          </div>
        </div>
        <div className="play-or-delete">
          <button className="play-item-button">
            <i className="fas fa-play"></i>
          </button>
          <i className="far fa-heart"></i>
          <i className={`fas fa-ellipsis-h delete-button`} onClick={this.toggleDropdown}>
          </i>
          <ul className={`delete-menu ${this.state.dropdown}`} style={{
            top: this.state.y,
            left: this.state.x
            }} >
            <li className={`navbar-menu-item`} onClick={this.handleDelete}>
              delete
            </li>
          </ul>

        </div>

        <ul className="song-index">
          {songItems}
        </ul>
      </div>
    );
  }
}

export default PlaylistShow;