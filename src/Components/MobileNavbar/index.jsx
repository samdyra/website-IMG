import React from "react";
import style from "./style.module.scss";
import LogoIMG from "../../assets/images/LogoIMG.png";
import login from "../../assets/images/login.png";
import { useState } from "react";
import Dropdown from "../Dropdown";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const location = useLocation();

  const linkName = location.pathname;

  const [navbar, setNavbar] = useState(false);
  const {
    container,
    linkContainer,
    logo,
    searchIcon,
    link,
    logotext,
    containerbig,
    containeractive,
    containerGeopoint,
    nav,
    burgermenu,
    burgerbar,
    menu,
    hidden,
    visible,
    burgerbar2,
    burgerbarunclicked,
    menuVisible,
    menuHidden,
    wrapper,
  } = style;
  const [fix, setFix] = useState(false);

  //hamburfer menu
  const [burger_class, setBurgerClass] = useState(burgerbar);
  const [menu_class, setMenuClass] = useState(menuHidden);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass(burgerbar2);
      setMenuClass(menuVisible);
    } else {
      setBurgerClass(burgerbarunclicked);
      setMenuClass(menuHidden);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const changeBackground = () => {
    if (window.scrollY >= 680) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  window.addEventListener("scroll", changeBackground);

  // const navbarOpacity = () => {
  //   if (window.scrollY >= 300) {
  //     setOpacity(100);
  //   } else {
  //     setOpacity(50);
  //   }
  // };

  const [offset, setOffset] = useState(0);

  window.addEventListener("scroll", (e) => {
    return setOffset(window.pageYOffset / 850);
  });

  function setFixed() {
    if (window.scrollY >= 392) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);
  return (
    <div>
      {linkName === "/" ? (
        <div>
          <div
            className={containeractive}
            style={{ background: `rgba(75,133,121, ${offset})` }}
          >
            <div className={container}>
              <div>
                <Link className={logo} to="/">
                  <img src={LogoIMG} />
                  <div className={logotext}>
                    <h1 style={{ fontFamily: "jakartabold" }}>
                      IKATAN MAHASISWA GEODESI
                    </h1>
                    <h1>INSTITUT TEKNOLOGI BANDUNG</h1>
                  </div>
                </Link>
              </div>
              <div>
                <div className={nav}>
                  <div className={burgermenu} onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={menu_class}
            onClick={() => setIsMenuClicked(true)}
          ></div>
        </div>
      ) : linkName === "/Geopoint" || linkName === "/Geopoint/Navigacity" ? (
        <div className={containerGeopoint}>
          <div className={container}>
            <div>
              <Link className={logo} to="/">
                <img src={LogoIMG} />
                <div className={logotext}>
                  <h1 style={{ fontFamily: "jakartabold" }}>
                    IKATAN MAHASISWA GEODESI
                  </h1>
                  <h1>INSTITUT TEKNOLOGI BANDUNG</h1>
                </div>
              </Link>
            </div>

            <div className={linkContainer}>
              <Dropdown menuName="activities" />
              <Dropdown menuName="karya" />
              <Link className={link} to="/Pojokimg">
                <div>Pojok IMG</div>
              </Link>
            </div>
            <a href="/login">
              <div className={searchIcon}>
                <img src={login} />
              </div>
            </a>
          </div>
        </div>
      ) : linkName === "/DPM" ? null : (
        <div className={containerbig}>
          <div className={container}>
            <div>
              <Link className={logo} to="/">
                <img src={LogoIMG} />
                <div className={logotext}>
                  <h1 style={{ fontFamily: "jakartabold" }}>
                    IKATAN MAHASISWA GEODESI
                  </h1>
                  <h1>INSTITUT TEKNOLOGI BANDUNG</h1>
                </div>
              </Link>
            </div>

            <div className={linkContainer}>
              <Dropdown menuName="activities" />
              <Dropdown menuName="karya" />
              <Link className={link} to="/Pojokimg">
                <div>Pojok IMG</div>
              </Link>
            </div>
            <a href="/login">
              <div className={searchIcon}>
                <img src={login} />
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
