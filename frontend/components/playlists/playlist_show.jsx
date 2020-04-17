import React from 'react';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPlaylists();
    this.props.fetchSongs();
    this.props.fetchUsers();
  }

  render() {
    const { 
      item, 
      // creator, 
      deleteItem,
      users,
      songs
    } = this.props
    if (!item) return null;
    
    const filteredSongs = Object.values(songs).length > 0 ? item.songIds.map(id => {
      return songs[id]
    }) : [];
    
    const creator = users[item.user_id];
    // debugger


    const songItems = filteredSongs.map(song => {
      return (
        <li className="songs" key={song.id}>
          {/* <img src={song.photoUrl} /> */}
          <div className="song-content">
            <div className="song-content-left">
              <i className="fas fa-music"></i>
              <i className="fas fa-play"></i>
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
      <div className="items-show-page">
        <div className="item-information">
          <img src={item.photoUrl} />
          <div className="item-name">{item.title}</div>
          <div className="creator">{creator.username}</div>
          <button className="play-item-button">PLAY</button>
          <i className="fas fa-ellipsis-h"></i>
          <div className="item-size">
            {filteredSongs.length} SONGS
          </div>
        </div>

        <ul className="song-index">
          {songItems}
        </ul>
      </div>
    );
  }
}

export default PlaylistShow;