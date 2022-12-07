import React from 'react';

export const MenuDesktop = ({items}) => {
    return (
        <ul className='flex gap-x-8'>
            {
                items.map(item => (
                    <li key={item.txt}>
                        <a href="#" className='flex flex-col items-center text-fifthLight hover:text-second drop-shadow-FifthLight hover:drop-shadow-second'>
                            <span>{item.icon}</span>
                            <p className='font-bold uppercase text-sm'>{item.txt}</p>
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}
