import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import './App.css';

/**
 * Reduce
 * 返回state
 */
function user(state = { name: 'redux' }, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
  }
  return state
}

/* 
 * Reduce
 * 返回state
 */
function project(state = { name: 'min-react' }, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
  }
  return state
}

/**
 * combineReducers: 整合多个reducer
 */
var rootReducer = combineReducers({
  user,
  project
})

var store = createStore(rootReducer);
console.log(store);
console.log(store.getState());

/**
 * 
 * @param {*} state 
 */
function inputRender(state = store.getState()) {
  var $userName = document.getElementById('userNameInput')
  $userName.innerHTML = state.user.name || '';
}

console.log(store.getState());

class App extends Component {
  
  componentDidMount() {
    store.subscribe(function () {
      inputRender()
    })
  }

  /** 处理用户输入 */
  changeUserName() {
    let $userNameInput = document.getElementById('userNameInput');
    let value = $userNameInput.value;
    // store.dispatch(action), 发起action
    store.dispatch({
      type: 'CHANGE_USER_NAME',
      name: value
    });
    console.log(store.getState());
  }

  render() {
    // const state = store.getState();

    return (<div>
      <h3>This is a demo for redux.</h3>
      <input id="userNameInput" /><button onClick={()=> this.changeUserName()}>更改userName</button>
    </div>
    );
  }
}

export default App;