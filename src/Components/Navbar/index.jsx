import React from 'react';
import style from './Navbar.module.scss';
import LogoIMG from '../../assets/images/LogoIMG.png';
import searchicon from '../../assets/images/search-icon.png';
import { useState } from 'react';
import Dropdown from '../Dropdown';
import { Link } from 'react-router-dom';

const Navbar = () => {
 const { container, linkContainer, logo, searchIcon } = style;
 const [ fix, setFix ] = useState(false);

function setFixed() {
    if (window.scrollY >= 392) {
        setFix(true)
    } else {
        setFix(false)
    }
};

window.addEventListener("scroll", setFixed)

  return (
    <>
    <nav className={ container }>
        <div className={ logo }>
            <img src={LogoIMG}/>
            <a>IMG-ITB</a>
        </div>
        <div className={linkContainer}>
            <Link to='/Activities'>
            Activities
            </Link>
            <Link to='/Pojokimg'>
            Pojokimg
            </Link>
            <Dropdown/>
        </div>
        <div className={searchIcon}>
            <img src={searchicon}/>
        </div>
    </nav>
    </>
  )
};

export default Navbar