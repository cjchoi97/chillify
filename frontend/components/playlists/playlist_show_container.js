import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { deletePlaylist, fetchPlaylists } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import { fetchUsers } from '../../actions/user_actions';
import { 
  togglePlay, 
  togglePause, 
  updateCurrentSong, 
  addSongsToQueue, 
  updateQueue,
  updateCurrentPlayAlbum,
  updateSongHistory,
  updateCurrentPlayAlbumId
} from '../../actions/music_actions';
import { openModal } from '../../actions/modal_actions';
import { removeSongFromPlaylist } from '../../actions/playlist_song_actions';

const msp = (state, ownProps) => {
  const playlist = state.entities.playlists[ownProps.match.params.id];

  // debugger
  // const creator = state.entities.users[playlist.user_id];
  const { users, songs } = state.entities
  // const playlistSongs = songs.length > 0 ? playlist.songIds.map(id => {
  //   return songs[id]
  // }) : [];

  return ({
    item: playlist,
    currentSongId: state.ui.music.songId,
    playing: state.ui.music.playing,
    songs: songs,
    creators: users,
    type: "playlist",
    history: ownProps.history,
    repeat: state.ui.music.repeat,
    shuffle: state.ui.music.shuffle,
    songHistory: state.ui.music.songHistory,
    currentUserId: state.session.id,
    currentItemId: state.ui.music.currentItemId,
    currentItemType: state.ui.music.currentItemType,
    path: ownProps.location.pathname.split('/')
  });
}

const mdp = dispatch => {
  return ({
    deleteItem: id => dispatch(deletePlaylist(id)),
    fetchItems: () => dispatch(fetchPlaylists()),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchCreators: () => dispatch(fetchUsers()),
    togglePlay: () => dispatch(togglePlay()),
    togglePause: () => dispatch(togglePause()),
    updateCurrentSong: (song) => dispatch(updateCurrentSong(song)),
    openModal: (modal, song) => dispatch(openModal(modal, song)),
    removeSongFromPlaylist: (songId, playlistId) => dispatch(removeSongFromPlaylist(songId, playlistId)),
    addSongsToQueue: songs => dispatch(addSongsToQueue(songs)),
    updateQueue: queue => dispatch(updateQueue(queue)),
    updateCurrentPlayAlbum: item => dispatch(updateCurrentPlayAlbum(item)),
    updateSongHistory: history => dispatch(updateSongHistory(history)),
    updateCurrentPlayAlbumId: item => dispatch(updateCurrentPlayAlbumId(item))
  })
}

export default connect(
  msp,
  mdp
)(PlaylistShow);

