import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
      点击了<span id="value">{props.n}</span>次
        <div>
          <button id="add" onClick={()=>{props.add1()}}>+1</button>
          <button id="add2" onClick={()=>{props.add2()}}>+2</button>
          <button id="addIfOdd" onClick={()=>{props.add3()}}>如果是单数就+1</button>
          <button id="addAfter2Sec" onClick={()=>{props.add4()}}>2s后+1</button>
        </div>
    </div>
  );
}

function getPartialStore(state){
  return {
    n: state.n
  }
}
const actionCreator = {
  add1: () => {
    return {type:'add', payload: 1}
  }
}
export default connect(getPartialStore,actionCreator)(App);
