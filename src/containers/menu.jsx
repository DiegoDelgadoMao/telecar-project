import React, { useState } from 'react';
import { RiStore2Line, RiHandHeartLine, RiTeamLine } from "react-icons/ri"
import '../styles/menu.scss';
import logo from '../assets/images/logo.png';
import MenuMobile from '../components/menu-mobile';
import MenuButton from '../components/menu-bottom';
const Menu = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className='menu-container'>
            <div className='menu-left'>
                <img src={logo} alt="logo" />
            </div>
            <div className='menu-right'>
                <ul>
                    <li><a href="#">
                        <RiStore2Line />
                        <p>Productos</p>
                    </a></li>
                    <li><a href="#">
                        <RiHandHeartLine />
                        <p>Servicios</p>
                    </a></li>
                    <li><a href="#">
                        <RiTeamLine />
                        <p>Nosotros</p>
                    </a></li>
                </ul>
            </div>
            <div className="menu-mobile" onClick={handleToggle}>
                <MenuButton />
            </div>
            {toggle && <MenuMobile />}
        </div>
    )
}

export default Menu;