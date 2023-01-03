export const initialState={
    loading: true,
    modalInfo: false,
    productModal: {},
    mainProducts: [],
    outstading: [],
    motorola: [],
    hytera: [],
    vertex: [],
}

const reducerObject = (state, payload)=>({
    'SHOW_MODAL': {...state, modalInfo: true, productModal: payload},
    'CLOSE_MODAL': {...state, modalInfo: false},
    'LOADED': {...state, loading: false},
    'CHANGE_PRODUCTS': {...state, mainProducts: payload},
    'CHANGE_OUTSTADING': {...state, outstading: payload},
    'CHANGE_MOTOROLA': {...state, motorola: payload},
    'CHANGE_HYTERA': {...state, hytera: payload},
    'CHANGE_VERTEX': {...state, vertex: payload},
})

export const reducer = (state,action)=>{
    if(reducerObject(state)[action.type]){
        return reducerObject(state,action.payload)[action.type]
    }else{
        return state
    }
}