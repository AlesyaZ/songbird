import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Audio from "../AudioPlayer/Audio";
import Song from "./Song";

import './index.scss';

const RandomBirds = (props) => {
    const {
        data: {
          image, name, species, description, audio,
        },
      } = props;
      const { fullVariant } = props;

    return (
        <>          
            <div className="random-bird">
                <div className="random-bird-img">
                    <img src={image} alt={name} className="bird__image"/>
                </div>
                <div className='bird-conteiner_name-play'>
                  <Song nameSong={name}/>
                  {
                    (species && fullVariant) && <p className="bird__species">{species}</p>
                  }
                  <ReactAudioPlayer
                    src={audio}
                    controls
                  />
                  {
                    (description && fullVariant) && <p className="bird__description">{description}</p>
                  }
                </div>
            </div>
        </>
    );
}

export default RandomBirds;