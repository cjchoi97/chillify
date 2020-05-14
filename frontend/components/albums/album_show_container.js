import { connect } from 'react-redux';
import PlaylistShow from '../playlists/playlist_show';
import { deletePlaylist } from '../../actions/playlist_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchSongs } from '../../actions/song_actions';
// import { fetchUsers } from '../../actions/user_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { togglePlay, togglePause, updateCurrentSong } from '../../actions/music_actions'

const msp = (state, ownProps) => {
  const album = state.entities.albums[ownProps.match.params.id];
  const { artists, songs } = state.entities

  return ({
    item: album,
    songs: songs,
    creators: artists,
    type: "album",
    // history: ownProps.history,
    currentSongId: state.ui.music.songId
  });
}

const mdp = dispatch => {
  return ({
    deleteItem: id => dispatch(deletePlaylist(id)),
    fetchItems: () => dispatch(fetchAlbums()),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchCreators: () => dispatch(fetchArtists()),
    togglePlay: () => dispatch(togglePlay()),
    togglePause: () => dispatch(togglePause()),
    updateCurrentSong: (song) => dispatch(updateCurrentSong(song))
  })
}

export default connect(
  msp,
  mdp
)(PlaylistShow);

