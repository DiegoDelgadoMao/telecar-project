import React from 'react'
import { RiMessage2Fill } from "react-icons/ri";

export const OutstadingProducts = ({product}) => {
    return (
        <div key={`${product.name}-${product.id}-outstading`} className='bg-second text-fourth shadow-second rounded-md grid grid-rows-[60%_40%]'>
            <div className='w-full h-full grid place-items-center'>
                <img src={product.img} alt="image product" className='w-4/5 h-11/12 object-contain' />
            </div>
<<<<<<< HEAD
            <div className='flex flex-col justify-evenly h-full'>
                <h2 className='ml-5 text-lg font-bold'>{product.name}</h2>
                <button className='w-10/12 mx-auto h-9 flex justify-evenly place-items-center bg-third rounded-xl txt-sm font-medium'>
                    Cotizar
                    <RiMessage2Fill />
=======
            <div className='flex flex-col pl-6 justify-evenly mt-2 h-full px-2'>
                <p className='text-2xl font-black'>${product.cost}</p>
                <h2 className='text-sm font-normal'>{product.name}</h2>
                <button className='w-full h-9 flex justify-evenly place-items-center bg-third rounded-xl text-fourth'>
                    Ver
                    <RiShoppingCart2Fill />
>>>>>>> 86fb1f1524e1645fdcd6c446835d33fc652f2db5
                </button>
            </div>

        </div>
    )
}
