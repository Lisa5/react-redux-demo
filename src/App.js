import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import './App.css';
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
 * Action
 * 返回一个对象
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

// function render(state = store.getState()) {
//   var $userName = document.getElementById('userName')
//   $userName.innerHTML = state.user.name
// }
// render();

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

  changeUserName() {
    let $userNameInput = document.getElementById('userNameInput');
    let value = $userNameInput.value;
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