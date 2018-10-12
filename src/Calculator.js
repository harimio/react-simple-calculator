import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Display from './components/Display';
import './Calculator.css';

class Calculator extends Component {
  state = {
    operation: {
      name: '',
      symbol: '',
      isSelected: false,
    }
  };

  numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  operations = [{
    name: 'division',
    symbol: '÷'
  }, {
    name: 'multiplication',
    symbol: 'x'
  }, {
    name: 'addition',
    symbol: '+'
  }, {
    name: 'subtraction',
    symbol: '-'
  }];

  handleNumberClick = (number) => {};

  handleOperationClick = (operation) => {};

  executeOperation = () => {};

  renderButtons = () => {};

  render() {
    const { operation: { symbol } } = this.state;
    const { display } = this.props;

    return (
      <div className="calculator">
        <Display value={`${display} ${symbol}`} />
        { this.renderButtons() }
      </div>
    );
  }
}

Calculator.propTypes = {
  display: PropTypes.number.isRequired,
  onUpdateFirstOperand: PropTypes.func.isRequired,
  onUpdateSecondOperand: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onExecuteOperation: PropTypes.func.isRequired
};

Calculator.defaultProps = {
  firstOperand: 0,
  secondOperand: 0
};

export default Calculator;
