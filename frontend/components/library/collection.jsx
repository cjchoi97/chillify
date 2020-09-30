import React from "react";

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: props.collection
    }
  }


  render() {

    const playlists = () => {
      if (this.state.collection === "playlists") {
        return (
          <div className="collection-item selected">
            Playlists
          </div>
        )
      } else {
        return (
          <div className="collection-item">
            Playlists
          </div>
        )
      }
    }

    const artists = () => {
      if (this.state.collection === "artists") {
        return (
          <div className="collection-item selected">
            Artists
          </div>
        )
      } else {
        return (
          <div className="collection-item">
            Artists
          </div>
        )
      }
    }

    const albums = () => {
      if (this.state.collection === "albums") {
        return (
          <div className="collection-item selected">
            Albums
          </div>
        )
      } else {
        return (
          <div className="collection-item">
            Albums
          </div>
        )
      }
    }

    return (
      <div className="collection-options">
        {playlists()}
        {artists()}
        {albums()}
      </div>
    )
  }
}

export default Collection;