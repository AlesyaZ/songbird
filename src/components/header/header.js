import React from 'react';
import birdsData from '../data';

import './index.scss';


const Header = (props) => {
    const { score, stage } = props;

    return (
        <div className="header group-birds score">
            <h3>
                <a href="#" className="logo-header">
                    Songbird
                </a>
            </h3>
            <ul className="group-birds">
                {
                    birdsData.map((category, i) => 
                        <li key={category.family} 
                            value={category.family} 
                            className={`${i === stage ? 'active' : ''}`}>
                        {category.family}
                    </li>)
                }
            </ul>
            <h5 className="score">
                Score:
                {' '}
                <span>{score}</span>
            </h5>
        </div>
    );
};

export default Header;