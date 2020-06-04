import { connect } from 'react-redux';
import SearchResults from './search-results';

const msp = state => {

  return {
    songs: state.ui.searches.songs,
    albums: state.ui.searches.albums,
    artists: state.ui.searches.artists,
  }
}

// const mdp = dispatch => {

// }

export default connect(
  msp,
  null
)(SearchResults);