import React from 'react';

class AddSongToPlaylist extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {

    const { playlists, currentUser, addSongToPlaylist } = this.props;

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
              <i className="fas fa-plus-circle"></i>
            </div>
          </div>
          <div className="playlist-item-information" onClick={() => addSongToPlaylist({})}>
            <span className="playlist-item-name">{item.title}</span>
            <span className="playlist-item-size">{item.songIds.length} songs</span>
          </div>
        </div>
      )
    })

    return(
      <div className="add-song-container">
        <div className="add-song-button-container">
          <i className="fas fa-times addsong" onClick={() => this.props.closeModal()}></i>

        </div>
        <h1>Add to playlist</h1>
        <button className="new-playlist-button" onClick={() => this.props.openModal("createPlaylist")}>New playlist</button>
        <div className="add-song-playlist-index">
          {indexItems}
        </div>

      </div>
    );
  }
}

export default AddSongToPlaylist;