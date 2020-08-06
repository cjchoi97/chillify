export const fetchArtists = () => (
  $.ajax({
    method: 'GET',
    url: '/api/artists'
  })
);

export const fetchArtist = id => (
  $.ajax({
    method: 'GET',
    url: `/api/artists/${id}`
  })
);

export const followArtist = artistId => (
  $.ajax({
    method: 'POST',
    url: `/api/artists/${artistId}/follow`
  })
)

export const unfollowArtist = artistId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/artists/${artistId}/unfollow`
  })
)