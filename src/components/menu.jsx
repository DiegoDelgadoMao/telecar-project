import React from 'react';
import '../styles/menu.scss'
const Menu = () => {
    return(
        <div className='menu-container'>
            <div className='menu-left'>
                <img src="#" alt="logo" />
            </div>
            <div className='menu-right'>
                <ul>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Productos</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;