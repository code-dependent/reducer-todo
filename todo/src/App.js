import React, {useReducer} from 'react';
import {reducer, incomplete, complete} from './reducers/reducer'
import './App.css';
import {TaskForm} from './components/TaskForm'
import { Button } from 'reactstrap';



function App() {
  const [state, dispatch] = useReducer(reducer, incomplete)
  const [state2] = useReducer(reducer, complete)



  const del = ()=>{
        dispatch({type:'DELETE_TASKS'})
  }
console.log(...state2)
   
  return (
    <main>
      <h1 style={{textAlign:'center'}}>My Todo List</h1>
      <div style={{display:'flex',justifyContent:'center',margin: '0 auto'}}>
        <TaskForm state={state} dispatch={dispatch} />
        <Button color='danger' style={{height:'40px', marginLeft:'3%'}} onClick={(e)=>del()}>CLEAR</Button>
      </div>
    <div className="App">
      <div style={{margin:'5% auto', display:'flex'}}>
        <div style={{marginRight: '3%'}}>
        <h1 style={{color:'forestgreen'}}>Completed</h1>
        {
          state2.map(task=>(<li key={task.id}>{`✅${task.item}`}</li>))
        }
      </div>
      {/* <div style={{display:'flex', justifyContent:'space-evenly',marginTop: '10%'}}>
        <TaskForm state={state} dispatch={dispatch} />
        <Button color='danger' style={{height:'40px', marginLeft:'5%'}} onClick={(e)=>del()}>CLEAR</Button>
      </div> */}
      <div style={{marginLeft: '3%'}}>
        <h1 style={{color:'red'}}>Incompleted</h1>
        {
          state.map(task=>(<li style={{listStyleType: 'none'}} className={task.completed?'complete':null} key={task.id} onClick={()=>{dispatch({type:'TOGGLE', payload:task.id})}}>{`❗️${task.item}`}</li>))
        }
      </div>
      </div>
    </div>
    </main>
  );
}

export default App;
