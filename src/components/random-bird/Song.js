import React from 'react';
import birdsData from '../data';

function Song(props) {
  const {
    nameSong
  } = props;
  
  // const playlist = audioFiles;
  // const nameBird = birdsData[0].data[1].name;
  
  return (
    <div className="song">
      <h1 className="song__title">{nameSong}</h1>
    </div>
  )
}

export default Song;