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
 * mapStateToProps(state, ownProps) 
 * 方法允许我们将store中的数据作为props绑定到组件中，只要store更新了就会调用mapStateToProps方法，
 * mapStateToProps返回的结果必须是object对象，该对象中的值将会更新到组件中 
 */
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

/**
 * mapDispatchToProps(dispatch, [ownProps])
 * 第二个参数允许我们将action作为props绑定到组件中，
 * mapDispatchToProps希望你返回包含对应action的object对象
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
 * 1. 建议使用 React Redux 库的 connect() 方法来生成
 * 2. conenct接受4个参数，分别是mapStateToProps，mapDispatchToProps，mergeProps，options(使用时注意参数位置顺序)
 */
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList