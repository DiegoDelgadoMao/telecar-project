import React from 'react'
import { RiMessage2Fill } from "react-icons/ri";

export const OutstadingProducts = ({product}) => {
    return (
        <div key={`${product.name}-${product.id}-outstading`} className='bg-second text-fourth shadow-second rounded-md grid grid-rows-[60%_40%]'>
            <div className='w-full h-full grid place-items-center'>
                <img src={product.img} alt="image product" className='w-4/5 h-11/12 object-contain' />
            </div>
            <div className='flex flex-col justify-evenly h-full'>
                <h2 className='ml-5 text-lg font-bold'>{product.name}</h2>
                <button className='w-10/12 mx-auto h-9 flex justify-evenly place-items-center bg-third rounded-xl txt-sm font-medium'>
                    Cotizar
                    <RiMessage2Fill />
                </button>
            </div>

        </div>
    )
}
