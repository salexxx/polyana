import React, { useState } from 'react';
import  {ReactComponent as Icon} from '../images/menuIcon.svg';
import  {ReactComponent as CloseIcon} from '../images/menu-close.svg';
import './NavBar.css';
import {NavLink} from 'react-router-dom';
import logo from '../images/vagi_logo.png'

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    
    <div className='menu' >
      <img className='menu__logo' src={logo}></img>
      <h2  style={{color: 'white' , fontFamily: 'SovMod'}}  ><a style={{textDecoration: 'none', fontSize: '14px', color: '#606060', padding:'0 20px 0 20px'}} href="tel:+79059462463">+7 905-946-24-63</a></h2>
      <nav className={isOpen ? "menu__nav active" : "menu__nav" } onClick={()=> setOpen(!isOpen)} >
        <ul className='menu__nav-list'>
          <li className='menu__nav-item'>
            <NavLink to="/"  className={({isActive}) =>  (isActive ? "menu__item_active" : "menu__item")}>НАЧАЛО</NavLink>
          </li>
          <li className='menu__nav-item'>
            <NavLink to="/instructors"  className={({isActive}) =>  (isActive ? "menu__item_active" : "menu__item")}>НАША КОМАНДА</NavLink>
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
        {isOpen ? <CloseIcon /> : <Icon/>}
      </div>
    </div>
    
  );
}

export default NavBar;