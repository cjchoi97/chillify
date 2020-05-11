import React from 'react';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: "closed"
    }

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  closeDropdown() {
    if (this.state.dropdown === "open") 
      this.setState({dropdown: "closed"});
  }

  handleDelete() {
    const { deleteItem, item } = this.props;
    deleteItem(item.id).then(() => this.props.history.push("/explore"));
  }

  toggleDropdown() {
    if (this.state.dropdown === "closed") {
      this.setState({ dropdown: "open" });
    } else {
      this.setState({ dropdown: "closed" });
    }
  }

  componentDidMount() {
    this.props.fetchItems();
    // this.props.fetchSongs();
    this.props.fetchCreators();
  }

  // componentWillUnmount() {

  // }

  render() {

    const { 
      item, 
      creators,
      songs,
      type
    } = this.props
    if (!item) return null;
    
    const filteredSongs = Object.values(songs).length > 0 ? item.songIds.map(id => {
      return songs[id]
    }) : [];
    
    const creator = creators[item.user_id];

    if (!creator) return null;
    // debugger


    const songItems = filteredSongs.map((song, i) => {
      return (
        <li className="songs" key={i}>
          <div className="song-content">
            <div className="song-content-left">
              <i className="fas fa-music"></i>
              <i className="fas fa-play song-play"></i>
              <div className="song-info">
                
                <div className="song-title">{song.title}</div>
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
              <i className="fas fa-ellipsis-h"></i>
              <span className="song-duration">0:00</span>
            </div>
          </div>
        </li>
      );
    });
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
            <ul className={`delete-menu ${this.state.dropdown}`}>
              <li className={`navbar-menu-item`} onClick={this.handleDelete}>
                delete
              </li>
            </ul>
          </i>

        </div>

        <ul className="song-index">
          {songItems}
        </ul>
      </div>
    );
  }
}

export default PlaylistShow;