import React, { Component } from 'react'
// import { addTodo } from '../redux/actions';
import { connect } from 'react-redux';

interface Props {
  addTodo: (title) => void
}
interface State {
  title: string
}

class TodoInput extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  onChangeTitle(e) {
    this.setState({title: e.target.value})
  }

  onKeyDownEnter(e) {
    if(e.which === 13) {
      if (this.props.addTodo) {
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
      }
    }
  }

  render() {
    return (
    <div className="todo__input">
      <div className="title">
        <input 
         type="text"
         placeholder="title.."
         required={true}
         value={this.state.title}
         onKeyDown={this.onKeyDownEnter.bind(this)}
         onChange={this.onChangeTitle.bind(this)}
        />
      </div>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (title) => {
      // dispatch(addTodo(title));
    }
  }
}
export default connect(null, mapDispatchToProps)(TodoInput)