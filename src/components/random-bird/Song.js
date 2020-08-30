import React from 'react';

function Song(props) {
  const {
    nameSong
  } = props;
  
  return (
    <div className="song">
      <h1 className="song__title">{nameSong}</h1>
    </div>
  )
}

export default Song;