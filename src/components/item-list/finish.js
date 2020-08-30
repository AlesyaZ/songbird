import React from 'react';

import ButtonNext from '../random-bird/Button';

export default class GameOver extends React.Component {
  
  render() {
    const { score, maxScore, handleOnClick } = this.props;
    return (
      <div className="finish">
        <p className="finish__title">Поздравляю!</p>
        <p className="finish__text">
          Вы набрали{' '}<span>{score}</span>{' '}баллов из{' '}<span>{maxScore}</span>
        </p>
        { score === maxScore
              && <p className="finish__win">Вы набрали максимальное количество баллов!</p>}
        {
          score !== maxScore
              && <ButtonNext buttonclass="finish__button" value="Пройти ещё раз" disabled={false} handleClick={handleOnClick} />
        }
      </div>
    );
  }
}