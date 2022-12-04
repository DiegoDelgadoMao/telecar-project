import React, { useState } from 'react';
import { RiStore2Line, RiHandHeartLine, RiTeamLine } from "react-icons/ri";

import logo from '../assets/images/logo.png'

import { MenuMobile } from '../components/menu-mobile';
import { MenuDesktop } from '../components/menu-desktop';

const Menu = () => {

    const list = [
        {
            txt: 'productos',
            icon: <RiStore2Line className='w-6 h-6'/>
        },
        {
            txt: 'servicios',
            icon: <RiHandHeartLine className='w-6 h-6'/>
        },
        {
            txt: 'nosotros',
            icon: <RiTeamLine className='w-6 h-6'/>
        }
    ]

    return(
        <nav className='w-full flex items-center justify-around py-5 relative bg-gradient-to-b'>
            <img className='w-28' src={logo} alt="" />
            {
                (screen.width < 620)
                    ? <MenuMobile items={list} />
                    : <MenuDesktop items={list} />
            }
        </nav>
    )
}

export default Menu;