import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

/** 有时很难分清到底该使用容器组件还是展示组件。例如，有时表单和函数严重耦合在一起 
 * 技术上讲可以把它分成两个组件，但一开始就这么做有点早。在一些非常小的组件里混用容器和展示是可以的。
 * 当业务变复杂后，如何拆分就很明显了。所以现在就使用混合型的吧...
*/
let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo