import React from 'react';
import { Link } from 'react-router-dom';

const logoHeader = () => {
  return (
    <div className="chillify-header">
      <Link to="/" className="header-logo">
        <img 
        src="https://chillify-aa-dev.s3.amazonaws.com/chillifylogoblack.png"
        height="120"/>
      </Link>
    </div>
  );
}

export default logoHeader;