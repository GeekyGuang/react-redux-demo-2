import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

function changeState(state, action){
  if(state === undefined){
    return {n: 0}
  }else{
    if(action.type === 'add'){
        return {n: state.n + action.payload}
    } else {
      return state
    }
  }
}

const store = createStore(changeState)

// function addIf(){
//   if(store.getState() % 2 === 1){
//      store.dispatch({type: 'add', payload: 1})
//   }
// }

// function addAfter(){
//   setTimeout(()=>{
//     store.dispatch({type: 'add', payload: 1})
//   },2000)
// }

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );



// store.subscribe(render)




