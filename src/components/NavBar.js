import React, { useState } from 'react';
import  {ReactComponent as Icon} from '../images/menuIcon.svg';
import  {ReactComponent as closeIcon} from '../images/menu-close.png';
import './NavBar.css';
import {NavLink} from 'react-router-dom';
import logo from '../images/vagi_logo.jpeg'

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    
    <div className='menu' onClick={()=> setOpen(!isOpen)}>
      <img className='menu__logo' src={logo}></img>
      <nav className={isOpen ? "menu__nav active" : "menu__nav" } >
        <ul className='menu__nav-list'>
          <li className='menu__nav-item'>
            <NavLink to="/"  className={({isActive}) =>  (isActive ? "menu__item_active" : "menu__item")}>НАЧАЛО</NavLink>
          </li>
          <li className='menu__nav-item'>
            <NavLink to="/teaching" className={({isActive}) =>  (isActive ? "menu__item_active" : "menu__item")}>ОБУЧЕНИЕ</NavLink>
          </li>
          <li className='menu__nav-item'>
            <NavLink to="/technical" className={({isActive}) =>  (isActive ? "menu__item_active" : "menu__item")}>ТЕХНИЧЕСКИЙ КУРС</NavLink>
          </li>
          <li className='menu__nav-item'>
            <NavLink to="/fisrules" className={({isActive}) =>  (isActive ? "menu__item_active" : "menu__item")}>10 ПРАВИЛ FIS</NavLink>
          </li>
        </ul>
    </nav>
      <div className='menu__button' onClick={()=> setOpen(!isOpen)}>
        <Icon />
      </div>
    </div>
    
  );
}

export default NavBar;