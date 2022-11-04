import React,{useState} from 'react';
import '../styles/menu.scss'
import logo from '../assets/images/logo.png';
import iconMenu from '../assets/images/menus.png';
import MenuMobile from '../components/menu-mobile';
const Menu = () => {
    const [toggle,setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle)
    }
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
            <img src={iconMenu} alt="Menu" onClick={handleToggle} />
        </div>
        {toggle && <MenuMobile/>}
    </div>
    )
}

export default Menu;