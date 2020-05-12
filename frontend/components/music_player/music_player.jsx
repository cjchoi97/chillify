import React from 'react';
import { Link } from 'react-router-dom';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: 0
    }
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.renderMainButton = this.renderMainButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchUsers();
  }

  componentDidUpdate() {

  }

  renderMainButton() {
    let src;
    if (this.props.playing) {
      src = "https://chillify-aa-dev.s3.amazonaws.com/pausebutton.png"
      return (
        <img
          onClick={this.pause}
          src={src}
          className="main-button"
        />
      )
    } else {
      src = "https://chillify-aa-dev.s3.amazonaws.com/playbutton.png"
      return (
        <img
          onClick={this.play}
          src={src}
          className="main-button"
        />
      )
    }
  }

  render() {
    const { song, artist } = this.props
    return (
      <div className="music-player">
        <div className="song-display">
          {/* song name */}
          {/* artist name */}
          {/* album cover */}
          {/* links to show pages */}
          {/* favorite button */}
        </div>

        <div className="mp-main">
          <audio id="audio">
            <source type="audio/mp3"/>
          </audio>
          <div className="control-buttons">
            <img
              src="https://chillify-aa-dev.s3.amazonaws.com/previous.png"
              className="song-select"
            />
            {this.renderMainButton()}
            <img
              src="https://chillify-aa-dev.s3.amazonaws.com/next.png"
              className="song-select"
            />
          </div>
        </div>

        <div className="volume-control">
        </div>

        <audio
          src="https://chillify-aa-dev.s3.amazonaws.com/music/Towkio+-+Heaven+Only+Knows+(ft.+Chance+The+Rapper%2C+Lido+%26+Eryn+Allen+Kane).mp3"
          ref="player"
          autoPlay={playing}>
        </audio>
      </div>
    )
  }
}

export default MusicPlayer;