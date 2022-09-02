import React from 'react';
import style from './Navbar.module.scss';
import LogoIMG from '../../assets/images/LogoIMG.png';
import searchicon from '../../assets/images/search-icon.png';
import { useState } from 'react';
import Dropdown from '../Dropdown';
import { Link } from 'react-router-dom';

const Navbar = () => {
 const { container, linkContainer, logo, searchIcon, link, logotext } = style;
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
        <div>
            <Link  className={ logo } to='/'>
            <img src={LogoIMG}/>
            <div className={logotext}>
            <h1>IMG-ITB</h1>
            <a>Ikatan Mahasiswa Geodesi</a>
            <a>Institut Teknologi Bandung</a>
            </div>
            </Link>
        </div>
        <div className={linkContainer}>
            <Link className={link} to='/Activities'>
            Activities
            </Link>
            <Link className={link} to='/Pojokimg'>
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