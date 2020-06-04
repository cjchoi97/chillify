import { connect } from 'react-redux';
import { search } from '../../../actions/search_actions';
import SearchBar from './search-bar';

const mdp = dispatch => {
  return {
    search: term => dispatch(search(term))
  }
}

export default connect(
  null,
  mdp
)(SearchBar);