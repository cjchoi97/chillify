import React from 'react';
import AlbumResults from './albums/album_results';
import ArtistResults from './artists/artist_results';
import SongResults from './songs/song_results';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownId: -1
    }
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  closeDropdown() {
    this.setState({
      dropdownId: -1
    })
  }
  
  render() {
    const { albums, songs, artists } = this.props;

    // console.log(albums);
    // console.log(songs);
    // console.log(artists);
    return(
      <div className="search-results-container" onClick={this.closeDropdown}>
        <SongResults songs={ songs } dropdownId={ this.state.dropdownId }/>
        <AlbumResults albums={ albums }/>
        <ArtistResults artists={ artists }/>
      </div>
    );
  }
}

export default SearchResults;