import React from 'react'

import motorola from '../assets/images/motorola-logo.png';
import hytera from '../assets/images/hytera-logo.png';
import vertex from '../assets/images/vertex-logo.png';

import { RiSearch2Fill } from "react-icons/ri";

export const Brands = () => {
    const brands = [motorola, hytera, vertex];

    return (
        <div className='w-10/12 mx-auto'>
            <h2 className='sub-titles txt-fifth mb-1'>
                <RiSearch2Fill />
                Buscar por marcas
            </h2>
            <div className='w-full h-38 gap-4 overflow-x-auto grid grid-cols-[repeat(3,140px)] py-6 px-3'>
                {
                    brands.map(item => (
                        <div key={`brand-${item}`} className='w-full h-32 rounded-lg bg-fourth shadow-xl grid place-items-center' >
                            <img src={item} alt={`logo-${item}`} className='w-24 h-24 object-contain' />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}