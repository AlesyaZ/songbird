import React from 'react';
import DataBirds from '../data';

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
                    DataBirds.map((dataBirds, init) => 
                        <li key={dataBirds.family} 
                            value={dataBirds.family} 
                            className={`${init === stage ? 'active' : ''}`}>
                        {dataBirds.family}
                    </li>)
                }
            </ul>
            <h5 className="score">
                Score:<span>{score}</span>
            </h5>
        </div>
    );
};

export default Header;