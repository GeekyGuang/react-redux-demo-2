import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'

function changeState(state, action){
  if(state === undefined){
    return 0
  }else{
    if(action.type === 'add'){
        return state + action.payload
    } else {
      return state
    }
  }
}

const store = createStore(changeState)

function addIf(){
  if(store.getState() % 2 === 1){
     store.dispatch({type: 'add', payload: 1})
  }
}

function addAfter(){
  setTimeout(()=>{
    store.dispatch({type: 'add', payload: 1})
  },2000)
}

function render(){
  ReactDOM.render(
    <React.StrictMode>
      <App value={store.getState()}
           add1={()=>{store.dispatch({type: 'add', payload: 1})}}
           add2={()=>{store.dispatch({type: 'add', payload: 2})}}
           add3={addIf}
           add4={addAfter}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render()
store.subscribe(render)




