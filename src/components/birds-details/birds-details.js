import React, { Component } from 'react';
import DataBirds from '../data';
import Audio from '../AudioPlayer/Audio';

export default class BirdsDetails extends Component {
    render() {
        const ItemBird = DataBirds;
        return (
            <div className='birds-details'>
                <img src={ItemBird.image}/>
                {ItemBird.name}
                {ItemBird.species}
                {ItemBird.description}
                <Audio/>
            </div>
        );
    }
}