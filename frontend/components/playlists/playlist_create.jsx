import React from 'react';

class PlaylistCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState( { [field]: e.target.value } )
      // this might be e.target
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { currentUser, fetchUser } = this.props;
    this.props.closeModal();
    const copyState = Object.assign({}, this.state);
    if (this.state.title.length === 0) {
      copyState.title = "New Playlist"
    }
    this.props.processForm(copyState).then(fetchUser(currentUser.id))
  }

  render() {

    

    return(
      <div className="create-playlist">
        <i className="fas fa-times create" onClick={() => this.props.closeModal()}></i>
        <h1 className="create-prompt">Create new playlist</h1>
        <div className="new-playlist-input-container">
          <form onSubmit={this.handleSubmit}>
            <div className="new-playlist-input">
              <h3 className="new-playlist-input-title">Playlist Name</h3>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                placeholder="New Playlist"
                className="new-playlist-input-name"
              />
            </div>
            <div className="cancel-create-buttons">
              <div className="playlist-cancel-button">
                <input
                  type="button"
                  onClick={() => this.props.closeModal()}
                  className="cancel-button"
                  value="CANCEL"
                />
              </div>
              <div className="playlist-create-button">
                <input
                  type="submit"
                  value="CREATE"
                  className="create-button"
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