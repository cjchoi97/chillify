import React from "react";

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: props.collection
    }
  }


  render() {

    console.log(this.state.collection);
    return (
      <div className="collection-options">
        <div className="collection-playlists ">
          playlists
        </div>
        <div className="collection-artists">
          Artists
        </div>
        <div className="collection-albums">
          Albums
        </div>
      </div>
    )
  }
}

export default Collection;