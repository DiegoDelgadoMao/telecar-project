import React from 'react'
import { RiShoppingCart2Fill } from "react-icons/ri";

export const OutstadingProducts = ({product}) => {
    return (
        <div key={`${product.name}-${product.id}-outstading`} className='bg-second text-fourth shadow-second rounded-md grid grid-cols-[40%_1fr] auto-cols-[100%]'>
            <div className='w-full h-full grid place-items-center'>
                <img src={product.img} alt="image product" className='aspect-[1/1.5] object-contain' />
            </div>
            <div className='flex flex-col pl-6 justify-evenly mt-2 h-full px-2'>
                <p className='text-2xl font-black'>${product.cost}</p>
                <h2 className='text-sm font-normal'>{product.name}</h2>
                <button className='w-full h-9 flex justify-evenly place-items-center bg-third rounded-xl text-fourth'>
                    comprar
                    <RiShoppingCart2Fill />
                </button>
            </div>

        </div>
    )
}
