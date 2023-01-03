import React from 'react'

export const Testing = ({ product }) => {
    console.log(product)
    return (
        <>
            <div>{product.name}</div>
            <div>{product.img}</div>
            <div>{product.brand}</div>
        </>
    )
}
