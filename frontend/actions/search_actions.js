import * as SearchApiUtil from '../util/search_api_util';

export const SEARCH = "SEARCH";

const receiveSearchTerm = term => {
  return {
    type: SEARCH,
    term
  };
};

export const search = term => dispatch => {
  return SearchApiUtil.search(term).then(value => 
    dispatch(receiveSearchTerm(value)), err => {
      console.log(err);
      return null;
    });
}