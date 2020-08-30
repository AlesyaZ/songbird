import React from 'react';

import './index.scss';

const ButtonNext = (props) => {
    const {
      buttonclass, value, disabled, handleClick,
    } = props;
    return (
      <button 
        type="button" 
        className={`button ${buttonclass}`} 
        disabled={disabled} 
        onClick={handleClick}>
          {value}
        </button>);
  };
  export default ButtonNext;