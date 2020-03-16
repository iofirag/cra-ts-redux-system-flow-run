import React, { Component } from 'react'
import { ChildRun } from './types';
import ChildRunComponent from './ChildRunComponent';



interface Props {
  child_runs: ChildRun[]
  progress: number
  steps_finished: number
  total_steps: number
}
interface State {

}

export default class FlowRunComponent extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
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
        <div>steps_finished: {this.props.steps_finished}</div>
        <div>total_steps: {this.props.total_steps}</div>
      </div>
    )
  }
}