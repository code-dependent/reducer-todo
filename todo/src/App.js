import React, {useReducer} from 'react';
import logo from './logo.svg';
import {reducer, initStateObj} from './reducers/reducer'
import './App.css';
import {TaskForm} from './components/TaskForm'

function App() {
  const [state, dispatch] = useReducer(reducer, initStateObj)

  

   
  return (
    <div className="App">
      <TaskForm state={state} dispatch={dispatch} />
     {
       state.map(task=>(<li className={task.complete? 'done':null} key={task.id} onClick={()=>{dispatch({type:'TOGGLE', payload:task.id})}}>{task.item}</li>))
     }
    </div>
  );
}

export default App;
