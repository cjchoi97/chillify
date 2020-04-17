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
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.refs.player.currentSrc) return;
    if (this.props.playing !== nextProps.playing) {
      (this.props.playing) ? this.pause() : this.play();
    }
  }

  play() {
    if (!this.refs.player.currentSrc) return;
    this.props.togglePlay(true);
    this.refs.player.play();
  }

  pause() {
    if (!this.refs.player.currentSrc) return;
    this.props.togglePlay(false);
    this.refs.player.pause();
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
    const { currentSong, playing } = this.props;
    const song = Object.values(this.props.songs).length > 0 ? 
      Object.values(this.props.songs)[0] : {};
    return (
      <div className="music-player">
        <div className="song-display">
        </div>

        <div className="mp-main">
          <div className="control-buttons">
            <img
              src="https://chillify-aa-dev.s3.amazonaws.com/previous.png"
              className="song-select"
            />
            {this.renderMainButton()}
            <img
              src="https://robotify-development.s3.amazonaws.com/next_hover.png"
              className="song-select"
            />
          </div>
        </div>

        <div className="volume-control">
        </div>

        <audio
          src={song.song_url}
          ref="player"
          autoPlay={playing}>
        </audio>
      </div>
    )
  }
}

export default MusicPlayer;