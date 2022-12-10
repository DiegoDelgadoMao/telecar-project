import React from 'react'
import { RiFilter2Fill, RiShoppingCart2Fill } from "react-icons/ri";

export const Searcher = () => {
    return (
        <div className='w-full flex justify-center gap-2 my-8'>
            <div className='grid grid-cols-[1fr_auto] w-8/12 max-w-sm h-12 bg-fourth rounded-lg shadow-lg overflow-hidden'>
                <input type="text" className='w-full h-full px-4 font-light text-sm outline-second '/>
                <button className='w-[53px] bg-second grid place-items-center'>
                    <RiFilter2Fill className='w-6 h-6 text-fourth'/>
                </button>
            </div>
            <button className='relative w-12 h-12 bg-first rounded-lg grid place-items-center'>
                <div className='absolute top-0 right-1 text-sm font-semibold text-fourth'>0</div>
                <RiShoppingCart2Fill className='w-6 h-6 text-fourth'/>
            </button>
        </div>
    )
}
