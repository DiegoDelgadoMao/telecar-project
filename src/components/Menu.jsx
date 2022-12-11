import React, { useState, useEffect} from 'react';
import { RiStore2Line, RiHandHeartLine, RiTeamLine } from "react-icons/ri";

import logo from '../assets/images/logo.png'

import { MenuMobile } from './MenuMobile';
import { MenuDesktop } from './MenuDesktop';

export const Menu = () => {
    const [mobile, setMobile] = useState(null)

    const list = [
        {
            txt: 'productos',
            icon: <RiStore2Line className='w-6 h-6'/>,
            url: '/'
        },
        {
            txt: 'servicios',
            icon: <RiHandHeartLine className='w-6 h-6'/>,
            url: '/servicios'
        },
        {
            txt: 'nosotros',
            icon: <RiTeamLine className='w-6 h-6'/>,
            url: '/nosotros'
        }
    ]

    useEffect(()=>{
        if(screen.width < 620) setMobile(true)
        else setMobile(false)
    },[])

    window.addEventListener('resize',()=>{
        if(screen.width < 620 && !mobile) setMobile(true)
        else if(screen.width > 620 && mobile) setMobile(false)
    })

    return(
        <nav className='w-full flex items-center justify-around py-5 relative bg-fourth shadow'>
            <img className='w-28' src={logo} alt="" />
            {
                (mobile)
                    ? <MenuMobile items={list} />
                    : <MenuDesktop items={list} />
            }
        </nav>
    )
}