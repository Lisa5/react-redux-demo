
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

console.log('todoApp reducer:', todoApp)
let store = createStore(todoApp)
console.log('todoApp state:', store.getState())
/**
 * <Provider> 让所有容器组件都可以访问 store，而不必显示地传递它。只需要在渲染根组件时使用即可
 * 简言之：把store绑定在视图层上
 */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

