import { connect } from 'react-redux';
import Calculator from './Calculator';

const mapStateToProps = (state) => ({
  display: state.display
});

const mapDispatchToProps = () => ({
  onUpdateFirstOperand: () => {},
  onUpdateSecondOperand: () => {},
  onExecuteOperation: () => {},
  onReset: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
