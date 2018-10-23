import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Display from './components/Display';
import NumberButton from './components/NumberButton';
import OperationButton from './components/OperationButton';
import './Calculator.css';

class Calculator extends Component {
  state = {
    operation: {
      name: '',
      symbol: '',
      isSelected: false,
    }
  };

  numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

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

  handleNumberClick = (number) => {
    if (!this.state.operation.isSelected) {
      this.props.onUpdateFirstOperand(number);
    } else {
      this.props.onUpdateSecondOperand(number);
    }
  };

  handleOperationClick = (operation) => {
    if (!this.state.operation.isSelected) {
      operation.isSelected = true;
      this.setState((state) => {
        return {
          operation: operation
        }
      });
      this.props.onUpdateOperator(operation.symbol);
    }
  };

  executeOperation = () => {
    if (this.state.operation.isSelected) {
      this.props.onExecuteOperation(this.state.operation.name);
      this.setState((state) => {
        return {
          operation: { isSelected: false }
        }
      });
    }
  };

  clearData = () => {
    this.props.onExecuteOperation('clear');
    this.setState((state) => {
      return {
        operation: { isSelected: false }
      }
    });
  };

  renderButtons = () => {
    let buttonNumbers = this.numbers.map((number, index) =>
      <NumberButton
        key={'n' + index}
        number={number}
        onClick={this.handleNumberClick}>
      </NumberButton>);

    let operationButtons = this.operations.map((operation, index) =>
      <OperationButton
        key={'o' + index}
        operation={operation}
        onClick={this.handleOperationClick}>
      </OperationButton>);

    return (
      <div className="container">
        <div className="container container-numbers">
          { buttonNumbers }
          <div className="button button-red" onClick={this.clearData}>C</div>
          <div className="button button-blue" onClick={this.executeOperation}>=</div>
        </div>
        <div className="container container-operators">
          {operationButtons}
        </div>
      </div>
    );
  };

  render() {
    const { display } = this.props;

    return (
      <div className="calculator">
        <Display value={display}  />
        { this.renderButtons() }
      </div>
    );
  }
}

Calculator.propTypes = {
  display: PropTypes.string.isRequired,
  onUpdateFirstOperand: PropTypes.func.isRequired,
  onUpdateOperator: PropTypes.func.isRequired,
  onUpdateSecondOperand: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onExecuteOperation: PropTypes.func.isRequired
};

Calculator.defaultProps = {
  firstOperand: 0,
  secondOperand: 0
};

export default Calculator;
