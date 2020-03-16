import React, { Component } from 'react'
// import TodoItem from '../components/FlowRun'
// import { Todo } from '../models/Todo'
// import { connect } from 'react-redux'
// import { completeTodo, deleteTodo, updateTodo } from '../redux/actions'

// interface Props {
//   todos: Todo[],
//   completeTodo: any,
//   deleteTodo: (id) => void,
//   updateTodo: (id, string) => void,
// }

// class TodoList extends Component<Props> {
  
//   render() {
//     return (
//       <ul className="todo__list">
//         {
//            this.props.todos.map((todo: Todo) => {
//               return (
//                 <TodoItem 
//                   key={todo.id} 
//                   todo={todo}
//                   completeTodo={this.props.completeTodo}
//                   deleteTodo={this.props.deleteTodo}
//                   updateTodo={this.props.updateTodo}
//                 />
//               )
//           })
//         }
//       </ul>
//     )
//   }
// }

// function mapStateToProps(state) {
//   return {
//     todos: state.todos
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     completeTodo: (id) => {
//       dispatch(completeTodo(id))
//     },
//     deleteTodo: (id) => {
//       dispatch(deleteTodo(id))
//     },
//     updateTodo: (id, string) => {
//       dispatch(updateTodo(id, string))
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(TodoList)