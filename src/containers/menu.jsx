import React from 'react';
import '../styles/menu.scss'
import logo from '../assets/images/logo.png';
import iconMenu from '../assets/images/menus.png';
const Menu = () => {
    return(
        <div className ='menu-container'>
        <div className ='menu-left'>
            <img src={ logo }  alt="logo" />
        </div>
        <div className ='menu-right'>
            <ul>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Productos</a></li>
            </ul>
        </div>
        <div className ="menu-mobile">
            <img src={iconMenu} alt="Menu"/>
        </div>
    </div>
    )
}

export default Menu;