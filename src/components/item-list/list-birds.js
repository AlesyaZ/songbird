import React from 'react';
import ItemList from './item-list';

export default class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateGameCl: true,
    };
  }

  handleCorrenClick = (selectedVariant) => {
    const { isAnswerApp, handleCorrenClick } = this.props;
    if (selectedVariant === isAnswerApp) {
      handleCorrenClick(true, selectedVariant);
      this.disableChange();
      return true;
    }
    handleCorrenClick(false, selectedVariant);
    return false;
  }

  disableChange = () => {
    this.setState({
      updateGameCl: false,
    });
  }


  render() {
    const { data } = this.props;
    const { updateGameCl } = this.state;
    return (
      <div className="answers">
        {data.map((bird) => (
          <ItemList
            updateGameCl={updateGameCl}
            value={bird.name}
            key={bird.id}
            id={bird.id}
            handleClick={this.handleCorrenClick}
          />
        ))}
      </div>
    );
  }
}
