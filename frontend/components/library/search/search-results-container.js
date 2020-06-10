import { connect } from 'react-redux';
import SearchResults from './search-results';
// import { fetchArtists } from '../../../actions/artist_actions';

const msp = state => {

  return {
    songs: state.ui.searches.songs,
    albums: state.ui.searches.albums,
    artists: state.ui.searches.artist,
  }
}

// const mdp = dispatch => {
//   return {
//     fetchArtists: () => dispatch(fetchArtists())
//   }
// }

export default connect(
  msp,
  null
)(SearchResults);