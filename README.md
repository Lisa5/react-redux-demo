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
> 严格的单向数据流是 Redux 架构的设计核心。

"如果你不知道是否需要 Redux，那就是不需要它。"

### redux适用场景：多交互、多数据源
* 用户的使用方式复杂
* 不同身份的用户有不同的使用方式（比如普通用户和管理员）
* 多个用户之间可以协作
* 与服务器大量交互，或者使用了WebSocket
* View要从多个来源获取数据

从组建角度：
* 某个组件的状态，需要共享
* 某个状态需要在任何地方都可以拿到
* 一个组件需要改变全局状态
* 一个组件需要改变另一个组件的状态

发生上面情况时，如果不使用 Redux 或者其他状态管理工具，不按照一定规律处理状态的读写，代码很快就会变成一团乱麻。你需要一种机制，可以在同一个地方查询状态、改变状态、传播状态的变化。


### Store 
> 联系reduce和action。Store 有以下职责：
  * 维持应用的 state；
  * 提供 getState() 方法获取 state；
  * 提供 dispatch(action) 方法更新 state；
  * 通过 subscribe(listener) 注册监听器;
  * 通过 subscribe(listener) 返回的函数注销监听器。

Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
Redux 提供createStore这个函数，用来生成 Store。

createStore()


### State
Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。
当前时刻的 State，可以通过store.getState()拿到。


### Action 
State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。
Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。
可以这样理解，Action 描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。


### Action Creator
View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator


### store.dispatch()
store.dispatch()是 View 发出 Action 的唯一方法


### Reducer
Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
```
const reducer = function (state, action) {
  // ...
  return new_state;
};
```


## react-redux
### connect() 
* （1）输入逻辑【mapStateToProps】：外部的数据（即state对象）如何转换为 UI 组件的参数
* （2）输出逻辑【mapDispatchToProps】：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。

### <Provider> 组件
React-Redux 提供Provider组件，可以让容器组件拿到state
React组件的context属性

### 关系图


## log

* 20190707深夜22:44：redux没有我想象中的简单，有点绕晕了
* 20190729下午15:55：终于有点头绪了
