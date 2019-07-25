import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

/**
 * 指定如何把当前 Redux store state 映射到展示组件的 props 中
 * @param {*} state 
 */
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

/**
 * mapDispatchToProps() 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => {
  return {
    // 注入TodoList的 onTodoClick 的 props
    onTodoClick: id => {
      // 分发TOGGLE_TODO这个action
      dispatch(toggleTodo(id))
    }
  }
}

/** 
 * 容器组件
 * 建议使用 React Redux 库的 connect() 方法来生成
 */
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList