import React from 'react';
import RandomBirds from './random-bird';
import Answers from '../item-list/list-birds';
import ButtonNext from './Button';
import correct from '../../assets/correct.mp3';
import error from '../../assets/error.mp3';
import InfoText from './infoText';
import TemplateBird from '../../assets/bird.jpg';

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVariant: '',
      isRightAnswer: false,
    };
  }

  componentDidMount() {
    this.audioTrue = new Audio(correct);
    this.audioFalse = new Audio(error);
  }

  stopAudio = (audio) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0.0;
    }
  }

  runAudioSignal = (isRightAnswer) => {
    this.stopAudio(this.audioTrue);
    this.stopAudio(this.audioFalse);
    if (isRightAnswer) {
      this.audioTrue.play();
    } else {
      this.audioFalse.play();
    }
  }

  applyQuestionGuess = () => {
    this.setState({
      isRightAnswer: true,
    });
  }

  handleCorrenClick = (isRightAnswer, selectedVariant) => {
    const { handleCorrenClick } = this.props;
    this.runAudioSignal(isRightAnswer);
    this.setState({
      selectedVariant,
    });
    if (isRightAnswer) {
      this.applyQuestionGuess();
    }
    handleCorrenClick(isRightAnswer);
  }

  handleOnClick = () => {
    const { isRightAnswer } = this.state;
    const { handleOnClick } = this.props;
    if (isRightAnswer) {
      handleOnClick();
    }
  }


  render() {
    const { isAnswerApp, data } = this.props;
    const { selectedVariant, isRightAnswer } = this.state;
    const selectedBird = data.find((bird) => bird.id === selectedVariant);
    const appliedBird = data.find((bird) => bird.id === isAnswerApp);
    const templateBird = {
      name: '*****',
      image: TemplateBird,
      audio: appliedBird.audio,
    };
    console.log(`Верный номер варианта: ${isAnswerApp}`);
    return (
      <>
        <div className="question">
          {
          isRightAnswer
            ? <RandomBirds data={appliedBird} />
            : <RandomBirds data={templateBird} />
        }

        </div>
        <div className='play-birds'>
            <Answers
              data={data}
              isAnswerApp={isAnswerApp}
              handleCorrenClick={this.handleCorrenClick}
            />
            {
            selectedVariant
              ? <RandomBirds data={selectedBird} fullVariant />
              : <InfoText />
          }
        </div>
        <div className="controls">
          <ButtonNext
            buttonclass="controls__next"
            value="Next Level"
            disabled={!isRightAnswer}
            handleClick={this.handleOnClick}
          />
        </div>
      </>
    );
  }
}