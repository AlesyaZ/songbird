import React from 'react';
import Header from '../header';
import GameContainer from '../random-bird';
import DataBirds from '../data';
import { random } from 'lodash';
import GameOver from '../item-list/finish';

import './index.scss';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        score: 0,
        stage: 0,
        stageScore: 5,
        isRightAnswer: false,
        isGameEnd: false,
        maxScore: DataBirds.length * 5,
        isAnswerApp: '',
      };
    }
  
    componentDidMount() {
      this.numberCorrentAnswer();
    }
  
    CorrentStage = () => {
      const { stage } = this.state;
      if (stage < DataBirds.length - 1) {
        this.setState((StateGame) => ({
          stage: StateGame.stage + 1,
          stageScore: 5,
          isRightAnswer: false,
        }));
        this.numberCorrentAnswer();
      } else {
        this.setState({
          isGameEnd: true,
        });
      }
    }
  
    updateRating = (isAnswerOption) => {
      const { isRightAnswer } = this.state;
      if (!isRightAnswer) {
        if (isAnswerOption) {
          this.setState((StateGame) => ({
            score: StateGame.score + StateGame.stageScore,
            isRightAnswer: true,
          }));
        } else {
          this.setState((StateGame) => ({
            stageScore: StateGame.stageScore - 1,
          }));
        }
      }
    }
  
    numberCorrentAnswer = () => {
      const { stage } = this.state;
      const randomBirds = random(1, DataBirds[stage].data.length);
      this.setState({ isAnswerApp: randomBirds });
    }
  
    updateGame = () => {
      this.setState({
        score: 0,
        stage: 0,
        stageScore: 5,
        isRightAnswer: false,
        isGameEnd: false,
  
      });
      this.numberCorrentAnswer();
    }

    render() {
        const {
            score, maxScore, stage, isAnswerApp, isGameEnd,
          } = this.state;

    return (
        <>
        <div>
            <Header 
              score={score} 
              stage={stage}/>
            <div className='wrapper'> 
            {
            (isAnswerApp && !isGameEnd)
            && (
              < GameContainer
                  key={stage}
                  data={DataBirds[stage].data}
                  isAnswerApp={isAnswerApp}
                  handleOnClick={this.CorrentStage}
                  handleCorrenClick={this.updateRating}
              />
              )
            }
            {
              isGameEnd
              && <GameOver 
                  score={score} 
                  maxScore={maxScore} 
                  handleOnClick={this.updateGame} />
            }
          </div>
        </div>
      </>
    );
  }
}

export default App;