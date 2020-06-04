import React from 'react';
import { Link } from 'react-router-dom';

const ArtistResults = ({ artists }) => {
  if (!artists) return null;

  const items = Object.values(artists).map(artist => {
    <Link className="search-item" key={artist.id} to={`/artists/${artist.id}`}>
      <img src={artist.photoUrl} />
      <div className="search-item-title">{artist.title}</div>
      <div className="search-item-creator">{artist.artist_name}</div>
    </Link>
  })

  return (
    <>
      <h1>Artists</h1>
      <div className="artist-results">
        {items}
      </div>
    </>
  )
}

export default ArtistResults;