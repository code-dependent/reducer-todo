import React, {useReducer, useState, useEffect} from 'react'
import {useForm} from './customHooks/useForm'
import {reducer, initStateObj} from '../reducers/reducer'


export const TaskForm = (props)=>{
    const [task, setTask] = useState('')

    const handleChanges = (e) => {
        setTask( e.target.value );
      };


    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            props.dispatch({type:'ADD_TASK', payload:task})
            setTask('')
            }}>
            <input
                name='task'
                value={task}
                onChange={handleChanges}/>
        </form>
    )
}