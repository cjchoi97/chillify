import { connect } from 'react-redux';
import CollectionIndex from '../library/collection_index';

const msp = state => {
  return ({
    message: "This is the album collection"
  });
}

export default connect(
  msp
)(CollectionIndex);