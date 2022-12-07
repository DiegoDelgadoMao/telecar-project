import React, {useState} from 'react';
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

export const MenuMobile = ({items})=>{
    const [navMobile, setNavMobile] = useState(false);

    const handleMenuNav = () => setNavMobile(!navMobile)

    return (
        <div className="container-menu-icon">
            {
                (!navMobile)
                    ? <RiMenuLine className='w-8 h-8' onClick={handleMenuNav}/>
                    : <RiCloseLine className='w-8 h-8' onClick={handleMenuNav} />
            }
            <ul className={`${(!navMobile)? 'hidden' : ''} bg-fourth absolute bottom-[-208px] w-full h-52 left-0 bg-cyan-200 flex flex-col`} >
                {
                    items.map(item => (
                        <li key={item.txt} className='hover:bg-cyan-300'>
                            <a href="#" className='flex flex-row-reverse justify-end py-4 pl-3 gap-x-4 items-center text-fifthLight hover:text-second drop-shadow-FifthLight hover:drop-shadow-second'>
                                <span>{item.icon}</span>
                                <p className='font-bold uppercase text-xs'>{item.txt}</p>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
