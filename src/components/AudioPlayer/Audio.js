import React from "react";

// import Song from "./Song";
import Play from "./Play";
import Pause from "./Pause";
import Bar from "./Bar";
import birdsData from '../data';

import useAudioPlayer from './useAudioPlayer';

function Audio(props) {
  const {
    playAudio
  } = props;
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
  const audioBird = birdsData[0].data[1].audio;
  return (
    <div className="player">
      <audio id="audio">
        <source src={playAudio} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      {/* <Song songName="Instant Crush" songArtist="Daft Punk ft. Julian Casablancas" /> */}
      <div className="controls">
        {playing ? 
          <Pause handleClick={() => setPlaying(false)} /> :
          <Play handleClick={() => setPlaying(true)} />
        }
        <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/>
      </div>
    </div>
  );
}

export default Audio;
