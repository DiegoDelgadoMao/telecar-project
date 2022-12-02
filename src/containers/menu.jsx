import React, { useState } from 'react';
import { RiStore2Line, RiHandHeartLine, RiTeamLine, RiMenuLine } from "react-icons/ri";
// import '../styles/menu.scss';
import logo from '../assets/images/logo.png';
// import MenuMobile from '../components/menu-mobile';
// import MenuButton from '../components/menu-bottom';
const Menu = () => {
    const [navMobile, setNavMobile] = useState(false);

    const handleMenuNav = () => setNavMobile(!navMobile)

    return (
        <nav className='w-full flex items-center justify-around py-5 relative'>
            <img className='w-28' src={logo} alt="" />
            <div className="container-menu-icon">
                <RiMenuLine className='w-8 h-8' onClick={handleMenuNav}/>
                <ul className={`${(!navMobile)? 'hidden' : ''} absolute bottom-[-384px] w-full h-96 left-0 bg-red-400 flex flex-col`} >
                    <li>
                        <a href="#">
                            <RiStore2Line />
                            <p>Productos</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <RiHandHeartLine />
                            <p>Servicios</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <RiTeamLine />
                            <p>Nosotros</p>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;