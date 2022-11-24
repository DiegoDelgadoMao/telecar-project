import React from 'react';
import {RiStore2Line,RiHandHeartLine,RiTeamLine} from 'react-icons/ri';
import '../styles/menu-mobile.scss';

const MenuMobile = () => {
    return(
        <div className="menu-mobilePage">
            <ul>
                <li>
                    <a href="#">
                      <RiStore2Line/>
                      <p>Productos</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <RiHandHeartLine/>
                       <p>Servicios</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <RiTeamLine/>
                       <p>Nosotros</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default MenuMobile;