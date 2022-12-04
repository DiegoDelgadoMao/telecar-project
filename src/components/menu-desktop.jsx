import React from 'react';

export const MenuDesktop = ({items}) => {
    return (
        <ul className='flex gap-x-8'>
            {
                items.map(item => (
                    <li key={item.txt}>
                        <a href="#" className='flex flex-col items-center text-cyan-900'>
                            <span>{item.icon}</span>
                            <p className='font-bold uppercase text-sm'>{item.txt}</p>
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}
