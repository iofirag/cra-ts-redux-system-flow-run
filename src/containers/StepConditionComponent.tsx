import React, { Component } from 'react'
import { StepFlow } from '../components/types';
import StepComponent from '../components/Step/StepComponent';
import { updateValue } from '../redux/actions';
import { connect } from 'react-redux';


interface Props {
  title : string,
  predicate: string,
  if_true: StepFlow,
  if_false: StepFlow,
  children?: Node,
  value: number
}
interface State { }

class StepConditionComponent extends Component<Props, State> {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {}
  }

  render() {    
    return (
      <div>
        <div>title: {this.props.title}</div>
        { 
          eval(this.props.title.toLowerCase().replace('if', '').replace('number', `${this.props.value}`)) ? /* eslint no-eval: 0 */
            <StepComponent step={this.props.if_true} /> : <StepComponent step={this.props.if_false} />
        }
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    value: state.value
  }
}
function mapDispatchToProps(dispatch) {
  return {
    updateValue: (newValue) => {
      dispatch(updateValue(newValue))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StepConditionComponent)