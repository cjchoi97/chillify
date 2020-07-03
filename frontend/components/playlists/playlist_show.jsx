import React from 'react';
import { Link } from 'react-router-dom';

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
    this.playCollection = this.playCollection.bind(this);
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

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  playCollection(filteredSongs) {
    const { item, type } = this.props;
    this.props.updateCurrentPlayAlbumId({ id: item.id, type: type })
    this.props.updateCurrentPlayAlbum([...filteredSongs]);
    if (!filteredSongs.length) return;
    if (filteredSongs.includes(this.props.currentSongId)) {
      this.props.togglePlay();
      return
    }

    if (this.props.shuffle) {
      const shuffledSongs = this.shuffle([...filteredSongs]);
      this.props.updateCurrentSong(shuffledSongs[0]);
      this.props.updateQueue(shuffledSongs.slice(1));
    } else {
      this.props.updateCurrentSong(filteredSongs[0]);
      this.props.updateQueue([...filteredSongs.slice(1)]);
    }
    this.props.togglePlay();
    
  }

  playSong(song, filteredSongs) {
    const { songHistory, shuffle, item, type } = this.props;
    const songIndex = filteredSongs.indexOf(song);

    let songs = [];
    if (shuffle) {
      songs = this.shuffle(filteredSongs);
    } else {
      songs = filteredSongs;
    }

    songHistory.unshift(...songs.slice(0, songIndex).reverse());

    this.props.updateCurrentPlayAlbumId({id: item.id, type: type});
    this.props.updateCurrentPlayAlbum(songs);
    this.props.updateQueue([...songs.slice(songIndex+1)]);
    this.props.updateSongHistory(songHistory);
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
      path,
      currentItemType,
      currentItemId
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
            onClick={() => this.playSong(song, filteredSongs)}></i>
        )
      } else if (currentSongId === song.id && this.props.playing) {
        return(
          <i className={`fas fa-pause song-pause show ${green}`}
            onClick={this.pauseSong}></i>
        )
      } else {
        return (
          <i className={`fas fa-play song-play show ${green}`}
            onClick={() => this.playSong(song, filteredSongs)}></i>
        )
      }
    }

    const greenPlayOrPause = () => {
      path[1] = path[1].substring(0, path[1].length - 1);

      if (path[1] === currentItemType && item.id === currentItemId && playing) {
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
            <button className="play-item-button" onClick={() => this.playCollection(filteredSongs)}>
              <i className="fas fa-play"></i>
            </button>
          </>
        )
      }
    }

    const displayAlbumName = (song) => {
      if (type === "playlist") {
        return (
          <>
            <span className="dot">•</span>
            <Link to={`/albums/${song.album_id}`} className="song-album">
              {song.album_title}
            </Link>
          </>
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
                  <Link to={`/artists/${song.artist_id}`} className="song-artist">
                    { song.artist_name }
                  </Link>
                  {displayAlbumName(song)}
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
                <div className="creator">
                  <Link to={`/artists/${creator.id}`}>{creator.username}</Link>
                </div>
                {/* <span className="dot">•</span> */}
                {/* <span className="total-duration">0m 0s</span> */}
              </div>
              
            {/* <div className="item-size">
              {filteredSongs.length} SONGS
            </div> */}
          </div>
        </div>
        <div className="play-or-delete">
          {greenPlayOrPause()}
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