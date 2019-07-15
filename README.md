# react-redux-demo

## 项目结构
```
|-public
  |-index.html  // template
|-src
  |-App.js
  |-Index.js // 入口文件
|-webpack.config.js  // 使用webpack打包
``` 

## redux
Action
Reducer
Store

### Action
可以理解为一个对象，包含type属性。
用来描述“发生了什么”

### Reducer
> 注意每个 reducer 只负责管理全局 state 中它负责的一部分。每个 reducer 的 state 参数都不同，分别对应它管理的那部分 state 数据。
> 根据acton更新state

```
function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}
```

### Store


### 关系图


## log

* 20190707深夜22:44：redux没有我想象中的简单，有点绕晕了
