import React, {useReducer} from 'react';

export const initialState={
    loading: true,
    modalInfo: false,
    productModal: {}
}

const reducerObject = (state, payload)=>({
    'SHOW_MODAL': {...state, modalInfo: true, productModal: payload},
    'CLOSE_MODAL': {...state, modalInfo: false},
    'LOADED': {...state, loading: false},
})

export const reducer = (state,action)=>{
    if(reducerObject(state)[action.type]){
        return reducerObject(state,action.payload)[action.type]
    }else{
        return state
    }
}