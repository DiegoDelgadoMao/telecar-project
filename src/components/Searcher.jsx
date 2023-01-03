import React from 'react'
import { RiFilter2Fill, RiShoppingCart2Fill } from "react-icons/ri";

export const Searcher = () => {
    return (
        <div className='grid grid-cols-[1fr_auto] w-10/12 max-w-sm h-12 bg-fourth rounded-lg shadow-lg overflow-hidden mx-auto mt-8 mb-4'>
            <input type="text" className='w-full h-full px-4 font-light text-sm outline-second ' />
            <button className='w-[53px] bg-second grid place-items-center'>
                <RiFilter2Fill className='w-6 h-6 text-fourth' />
            </button>
        </div>
    )
}
