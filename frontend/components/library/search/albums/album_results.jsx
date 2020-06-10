import React from 'react';
import { Link } from 'react-router-dom';

const AlbumResults = ({ albums }) => {
  if (!albums) return null;

  const items = Object.values(albums).map(album => {
    return (
      <Link className="search-item" key={album.id} to={`/albums/${album.id}`}>
        <img src={album.photoUrl} />
        <div className="search-item-title">{album.title}</div>
        <div className="search-item-creator">{album.artist_name}</div>
      </Link>
    );
  });

  return (
    <>
      <h1>Albums</h1>
      <div className="album-results">
        {items}
      </div>
    </>
  )
  
}

export default AlbumResults;