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
            const newState = state.filter(item=> item.id !== action.payload)
            console.log(target)
            // state.map((item)=>{
            //     if(item.id === action.payload){
            //         return item.completed = !item.completed
            //     }
            // })

                
            
            return [...newState, target];
        default:
            return state
    }
}

export const initStateObj = [
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
        item: 'Havest Sheeps Wool',
        completed: false,
        id: uuid()
    }
]