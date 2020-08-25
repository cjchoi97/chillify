import * as ArtistAPIUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";

const receiveArtists = artists => {
  return({
    type: RECEIVE_ARTISTS,
    artists
  });
}

const receiveArtist = artist => {
  return({
    type: RECEIVE_ARTIST,
    artist
  });
}

const toggleFollow = value => {
  return({
    type: TOGGLE_FOLLOW,
    value
  })
}

export const followArtist = artistId => dispatch => {
  return (
    ArtistAPIUtil.followArtist(artistId).then(artist => (
      dispatch(toggleFollow(artist))
    ))
  );
}

export const unfollowArtist = artistId => dispatch => {
  return (
    ArtistAPIUtil.unfollowArtist(artistId).then(artist => (
      dispatch(toggleFollow(artist))
    ))
  );
}

export const fetchArtists = () => dispatch => {
  return(
    ArtistAPIUtil.fetchArtists().then(artists => (
      dispatch(receiveArtists(artists))
    ))
  )
}

export const fetchArtist = id => dispatch => {
  return(
    ArtistAPIUtil.fetchArtist(id).then(artist => (
      dispatch(receiveArtist(artist))
    ))
  )
}
