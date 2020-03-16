import React, { Component } from 'react'
import { FlowRun } from './types';
import FlowRunComponent from './FlowRunComponent';

interface Props {}
interface State {
  flowRun?: FlowRun;
}

class App extends Component<Props, State> {

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    fetch('/exercise_react.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(response => response.json())
    .then(flowRun => this.setState({flowRun}));
  }
  
  render() {
    return (
      <div>
        {this.state.flowRun ? 
          <FlowRunComponent 
            child_runs={this.state.flowRun.child_runs} 
            progress={this.state.flowRun.progress}
            steps_finished={this.state.flowRun.steps_finished}
            total_steps={this.state.flowRun.total_steps}
          /> : ''
        }
      </div>
    )
  }
}

export default App;