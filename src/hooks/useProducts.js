import React, { useReducer, useState, useEffect } from 'react'

import { getAllproducts } from '../firebase.js';


export const useProducts = () => {
    useEffect(() => {
        const data = [];
        const getData = async () => {
            const response = await getAllproducts();
            response.forEach(doc => {
                console.log('data: ' ,doc.data())
                data.push(doc.data())
            })
            console.log(data)
        }
        getData()
    }, [])

    // const loaded = () => dispatch({ type: 'LOADED' })

    // return {
    //     mainProducts
    // }

    return {
        prop: 'hello world'
    }
}
