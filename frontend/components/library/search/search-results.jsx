import React from 'react';
import AlbumResults from './albums/album_results';
import ArtistResults from './artists/artist_results';
import SongResults from './songs/song_results';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      closeDrop: ""
    }
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  closeDropdown() {
    this.setState({
      closeDrop: "close"
    })
  }
  
  render() {
    const { albums, songs, artists } = this.props;

    // console.log(albums);
    // console.log(songs);
    // console.log(artists);
    return(
      <div className="search-results-container" onClick={this.closeDropdown}>
        <SongResults songs={ songs } closeDrop={ this.state.closeDrop }/>
        <AlbumResults albums={ albums }/>
        <ArtistResults artists={ artists }/>
      </div>
    );
  }
}

export default SearchResults;