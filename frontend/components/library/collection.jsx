import React from "react";
import { Link } from "react-router-dom";


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
          <Link className="collection-item" to='/collection/playlists'>
            Playlists
          </Link>
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
          <Link className="collection-item" to='/collection/artists'>
            Artists
          </Link>
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
          <Link className="collection-item" to='/collection/albums'>
            Albums
          </Link>
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