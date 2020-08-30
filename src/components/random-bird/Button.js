import React from 'react';

import './button.scss';

const ButtonNext = (props) => {
  const {
    buttonclass, value, disabled, handleClick,
  } = props;
  return (
    <div className='button-next'>
    <button 
      type="button" 
      className={`button ${buttonclass}`} 
      disabled={disabled} 
      onClick={handleClick}>
        {value}
    </button>
  </div>
  );
};
export default ButtonNext;