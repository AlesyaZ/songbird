import React from 'react';

import './index.scss';

export default class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClickError: false,
      isClickCorrect: '',
    };
  }

  handleClick = () => {
    const { handleClick, updateGameCl, id } = this.props;
    if (handleClick(id)) {
      this.setState({
        isClickError: true,
        isClickCorrect: true,
      });
    } else if (updateGameCl) {
      this.setState({
        isClickError: true,
        isClickCorrect: false,
      });
    }
  }

  checkButtonClass = () => {
    const { isClickError, isClickCorrect } = this.state;
    if (isClickError) {
      if (isClickCorrect) {
        return 'answer_correct';
      }
      return 'answer_error';
    }
    return '';
  }

  render() {
    const { value } = this.props;
    return (
      <button
        type="button"
        className={`answer ${this.checkButtonClass()}`}
        onClick={this.handleClick}
      >
        {value}
      </button>
    );
  }
}