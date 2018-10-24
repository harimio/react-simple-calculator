import React, { Component } from 'react';
import PropTypes from 'proptypes';
import './Calculator.css';

// Import components
import Display from './components/Display';
import NumberButton from './components/NumberButton';
import OperationButton from './components/OperationButton';

class Calculator extends Component {

  handleButtonClear = () => {
    this.props.onReset();
  };
  
  handleButtonEqual = () => {
    this.props.onExecuteOperation(this.props.currentOperation);
  };

  handleButtonOperator = (operation) => {
    this.props.onUpdateOperator(operation);
  }

  concatOperand = (currentValue, newNumber) => {
    return currentValue
      ? Number(String(currentValue) + String(newNumber))
      : Number(newNumber);
  };

  handleButtonNumber = (number) => {
    if (this.props.result) {
      this.props.onReset();
    } else {
      if (!this.props.operationSelected) {
        this.props.onUpdateFirstOperand(
          this.concatOperand(this.props.firstOperand, number)
        );
      } else {
        this.props.onUpdateSecondOperand(
          this.concatOperand(this.props.secondOperand, number)
        );
      }
    }
  };

  getButtonNumbers = () => {
    return this.props.numbers.map((number, index) =>
      <NumberButton
        key={'n' + index}
        number={number}
        onClick={this.handleButtonNumber}>
      </NumberButton>);
  };

  getButtonsOperators = () => {
    return this.props.operations.map((operation, index) =>
      <OperationButton
        key={'o' + index}
        operation={operation}
        onClick={this.handleButtonOperator}>
      </OperationButton>);
  };

  getButtonClear = () => (
    <div className="button" onClick={this.handleButtonClear}>C</div>
  );

  getButtonEqual = () => (
    <div className="button" onClick={this.handleButtonEqual}>=</div>
  );

  getDisplay = () => {
    const operationSelected = this.props.operationSelected;
    const first = this.props.firstOperand ? this.props.firstOperand : '';
    const symbol = operationSelected ? this.props.currentOperation.symbol : '';
    const second = this.props.secondOperand ? this.props.secondOperand : '';
    const display = first + ' ' + symbol + ' ' + second;
    const result = this.props.result ? '= ' + this.props.result : '';

    return <Display value={ display } result={ result } />
  };

  render() {
    return (
      <div className="calculator">
        { this.getDisplay() }
        <div className="container">
          <div className="container container-numbers">
            { this.getButtonNumbers() }
            { this.getButtonClear() }
            { this.getButtonEqual() }
          </div>
          <div className="container container-operators">
            { this.getButtonsOperators() }
          </div>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  onUpdateFirstOperand: PropTypes.func.isRequired,
  onUpdateOperator: PropTypes.func.isRequired,
  onUpdateSecondOperand: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onExecuteOperation: PropTypes.func.isRequired
};

Calculator.defaultProps = {
  firstOperand: 0,
  secondOperand: 0,
  currentOperation: {},
  operationSelected: false
};

export default Calculator;
