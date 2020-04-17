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

  // componentDidMount() {
  //   // const player = this.refs.player;
  //   // player.addEventListener("ended", this.nextSong);
  //   // player.addEventListener("timeupdate", this.updateTime);
  //   // document.addEventListener("keydown", this.spaceBar);
  // }

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
    // if (!this.refs.player.currentSrc && this.props.queue.length) {
    //   //you added this late. Delete if it causes problems
    //   this.nextSong();
    // }
    if (!this.refs.player.currentSrc) return;
    // if (!this.refs.player.currentSrc) this.nextSong();
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
      src = "https://robotify-development.s3.amazonaws.com/pause_hover.png"
      return (
        <img
          onClick={this.pause}
          src={src}
          className="main-button"
        />
      )
    } else {
      src = "https://robotify-development.s3.amazonaws.com/play_hover.png"
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
          {/* {currentSong.cover_url && (
            <img
              src={currentSong.cover_url}
              className="current-song-img"
            />
          )} */}

          {/* <div className="song-info">
            <Link
              to={`/albums/${currentSong.album_id}`}
              className="mp-song-title"
            >
              {(currentSong.title)}
            </Link>
            <Link
              to={`/artists/${currentSong.artist_id}`}
              className="mp-artist-name"
            >
              {currentSong.artist_name}
            </Link>
          </div> */}
        </div>

        <div className="mp-main">
          <div className="control-buttons">
            {/* {this.renderShuffleButton()} */}

            <img
              // onClick={this.prevSong}
              src="https://robotify-development.s3.amazonaws.com/prev_hover.png"
              className="song-select"
            />

            {this.renderMainButton()}

            <img
              // onClick={this.nextSong}
              src="https://robotify-development.s3.amazonaws.com/next_hover.png"
              className="song-select"
            />

            {/* {this.renderRepeatButton()} */}

          </div>

          {/* <div className="progress-bar-container">
            <p className="time-display">{this.timeToString(this.state.currentTime)}</p>

            <input
              type="range"
              min={0}
              max={this.state.duration}
              value={this.state.currentTime}
              onChange={this.changeTime}
              onMouseDown={this.seek}
              onMouseUp={this.find}
              className="progress-bar"
            />
            <p className="time-display">{this.timeToString(this.state.duration)}</p>
          </div> */}

        </div>

        <div className="volume-control">
          {/* {this.renderVolumeImg()}

          <input
            type="range"
            min={0}
            max={100}
            value={this.state.volume}
            onChange={this.changeVolume}
            className="volume-slider"
          /> */}
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