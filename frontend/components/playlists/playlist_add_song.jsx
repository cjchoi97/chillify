import React from 'react';

class AddSongToPlaylist extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {

    const { playlists, currentUser } = this.props;

    const userPlaylists = Object.values(playlists).length > 0 ? currentUser.playlistIds.map(id => {
      return playlists[id]
    }) : [];

    const indexItems = userPlaylists.map(item => {
      if (!item) return null;
      return(
        <div className="add-song-playlist-item" key={item.id}>
          <div className="img-container">
            <img src={item.photoUrl} />
            <div className="modal-add-song-graphic">

            </div>
          </div>
          <div className="playlist-item-information">
            <span className="playlist-item-name">{item.title}</span>
            <span className="playlist-item-size">{item.songIds.length} songs</span>
          </div>
        </div>
      )
    })

    return(
      <div className="add-song-container">
        <i className="fas fa-times" onClick={() => this.props.closeModal()}></i>
        <h1>Add to playlist</h1>
        <button className="new-playlist-button">New playlist</button>
        <div className="add-song-playlist-index">
          {indexItems}
        </div>

      </div>
    );
  }
}

export default AddSongToPlaylist;