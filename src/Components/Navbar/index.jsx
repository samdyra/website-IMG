import React from "react";
import style from "./Navbar.module.scss";
import LogoIMG from "../../assets/images/LogoIMG.png";
import searchicon from "../../assets/images/search-icon.png";
import { useState } from "react";
import Dropdown from "../Dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {
    container,
    linkContainer,
    logo,
    searchIcon,
    link,
    logotext,
    content,
  } = style;
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 392) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);
  let menuName = "activities";
  return (
    <>
      <nav className={container}>
        <div className={content}>
          <div>
            <Link className={logo} to="/">
              <img src={LogoIMG} />
              <div className={logotext}>
                <h1>IKATAN MAHASISWA GEODESI</h1>
                <h1>INSTITUT TEKNOLOGI BANDUNG</h1>
              </div>
            </Link>
          </div>

          <div className={linkContainer}>
            <Dropdown menuName="activities" />
            <Dropdown menuName="karya" />
            <Link className={link}  to="/Pojokimg">
              <div>Pojok IMG</div>
            </Link>
          </div>

          <div className={searchIcon}>
            <img src={searchicon} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
