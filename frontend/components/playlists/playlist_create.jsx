import React from 'react';

class PlaylistCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      request: "dontcreate"
    }
  }

  handleCancel() {
    if (this.state.request === "dontcreate") {
      this.setState({ dropdown: "create" });
    } else {
      this.setState({ dropdown: "dontcreate" });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
    const newPlaylist = {
      title: this.state.title
    }
    if (this.state.title.length === 0) {
      copyState.title = "New Playlist"
    }
    this.props.createPlaylist(copyState);
  }

  render() {

    

    return(
      <div className={`create-playlist ${this.state.request}`}>
        <i className="fas fa-times" onClick={this.handleCancel}></i>
        <h1 className="new-playlist-title">Create new playlist</h1>
        <div className="new-playlist-input-container">
          <form onSubmit={this.handleSubmit}>
            <div className="new-playlist-input">
              <h3 className="new-playlist-input-title">Create New Playlist</h3>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                placeholder="New Playlist"
                className="new-playlist-input-box"
              />
            </div>
            <div className="new-playlist-btns">
              <div className="playlist-cancel-btn-box">
                <input
                  type="button"
                  onClick={() => this.pro()}
                  className="playlist-cancel-btn"
                  value="CANCEL"
                />
              </div>
              <div className="playlist-create-btn-box">
                <input
                  type="submit"
                  value="CREATE"
                  className="playlist-create-btn"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PlaylistCreate;