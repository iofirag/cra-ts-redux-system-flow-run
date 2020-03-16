import React, { Component } from 'react'
import { StepCondition, StepFlow, ChildRun } from './types';
import StepComponent from './Step/StepComponent';


interface Props {
  step: StepCondition | StepFlow
  child_runs: ChildRun[]
  return_value: number
  run_time: number
}
interface State {

}

export default class ChildRunComponent extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <StepComponent step={this.props.step}/>
        { 
          this.props.child_runs.map((childRun,i) => (
            <ChildRunComponent
              key={i}
              step={childRun.step}
              child_runs={childRun.child_runs}
              return_value={childRun.return_value}
              run_time={childRun.run_time} 
            />
          ))
        }
        <div>Return value: {this.props.return_value}</div>
        <div>run time: {this.props.run_time}</div>
      </div>
    )
  }
}