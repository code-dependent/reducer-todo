import React from 'react';
import {v4 as uuid} from 'uuid'

export const reducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TASK':
            
            const newTask = [...state, {item:action.payload,completed:false,id:uuid()}]
            return newTask;
        case 'TOGGLE':
            const target = state.find(({id})=>id === action.payload)
            console.log(target)
            target.completed = !target.completed
            const newState = state.filter(item=> item.id !== action.payload)
            console.log(target)
            // state.map((item)=>{
            //     if(item.id === action.payload){
            //         return item.completed = !item.completed
            //     }
            // })
            return [...newState, target];
        case 'DELETE_TASKS':
            // const complete = 
            const newArr = state.filter(task=>{
                if(task.completed === true){
                    complete.push(task)
                }
                return !task.completed})
                console.log(newArr)
            return [...newArr]
        // case 'CLEAR_COMPLETED':
        //     complete.filter(item=>item.completed? null:item)
        default:
            return state;
    }
}

export const incomplete = [
        {
            item: 'Clean Bedroom',
            completed: false,
            id: uuid()
        },
        {
            item: 'Prepare Dinner',
            completed: false,
            id: uuid()
        },
        {
            item: 'Plow the Fields',
            completed: false,
            id: uuid()
        },
        {
            item: 'Feed Chickens',
            completed: false,
            id: uuid()
        },
        {
            item: 'Wash Clothes',
            completed: false,
            id: uuid()
        },
        {
            item: 'Fix Broken Fence',
            completed: false,
            id: uuid()
        },
        {
            item: 'Fix Tractor',
            completed: false,
            id: uuid()
        }
    ]
export const complete = [
        
    ]
