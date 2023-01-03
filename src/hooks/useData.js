import React, {useEffect, useReducer} from 'react'
import { reducer, initialState } from '../reducers/index.js';
import { getAllproducts } from '../firebase.js';

export const useData = () => {
    const [state,dispatch] = useReducer(reducer, initialState)
    const {mainProducts} = state
    const changeProducts = (data) => dispatch({ type: 'CHANGE_PRODUCTS', payload: data })
    useEffect(()=>{
        const getData = async () => {
            const response = await getAllproducts();
            const data = [];
            response.forEach(doc => data.push(doc.data()))
            changeProducts(data)
        }
        getData()
    },[])
    return {mainProducts}
}
