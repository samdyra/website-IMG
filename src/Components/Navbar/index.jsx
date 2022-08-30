import React from 'react';
import style from './Navbar.module.scss';
import LogoIMG from '../../assets/images/LogoIMG.png';
import searchicon from '../../assets/images/search-icon.png';


const Navbar = () => {
 const { container, linkContainer, logo, searchIcon } = style;
  return (
    <div className={ container }>
        <div className={ logo }>
            <img src={LogoIMG}/>
            <a>IMG-ITB</a>
        </div>
        <div className={linkContainer}>
            <h1>Activities</h1>
            <h1>Karya</h1>
            <h1>Pojok</h1>
        </div>
        <div className={searchIcon}>
            <img src={searchicon}/>
        </div>
    </div>
  )
};

export default Navbar