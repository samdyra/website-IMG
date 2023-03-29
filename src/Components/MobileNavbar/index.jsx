import React from "react";
import style from "./style.module.scss";
import LogoIMG from "../../assets/images/LogoIMG.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const location = useLocation();

  const linkName = location.pathname;

  const [ , setNavbar ] = useState(false);
  const {
    container,
    logo,
    logotext,
    containerbig,
    containeractive,
    containerGeopoint,
    nav,
    burgermenu,
    burgerbar,
    burgerbar2,
    burgerbarunclicked,
    menuVisible,
    menuVisiblePemilu,
    menuVisibleGeopoint,
    menuHidden,
  } = style;
  const [ , setFix ] = useState(false);

  //hamburfer menu
  const [ burger_class, setBurgerClass ] = useState(burgerbar);
  const [ menu_class, setMenuClass ] = useState(menuHidden);
  const [ isMenuClicked, setIsMenuClicked ] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass(burgerbar2);
      setMenuClass(menuVisible);
      linkName === "/Geopoint" ||
        linkName === "/Geopoint/Navigacity" ||
        linkName === "/Geopoint/Ceremony"
        ? setMenuClass(menuVisibleGeopoint)
        : linkName === "/Pemilu"
          ? setMenuClass(menuVisiblePemilu)
          : setMenuClass(menuVisible);
    }
    else {
      setBurgerClass(burgerbarunclicked);
      setMenuClass(menuHidden);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const changeBackground = () => {
    if (window.scrollY >= 680) {
      setNavbar(false);
    }
    else {
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

  const [ offset, setOffset ] = useState(0);

  window.addEventListener("scroll", () => setOffset(window.pageYOffset / 850));

  function setFixed() {
    if (window.scrollY >= 392) {
      setFix(true);
    }
    else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);
  return (
    <div style={{ fontFamily: "jakarta" }}>
      {linkName === "/" || linkName === "/Pemilu" ? (
        <div>
          <div
            className={containeractive}
            style={
              linkName === "/Pemilu"
                ? { background: `rgba(128,0,0, ${offset})` }
                : { background: `rgba(75,133,121, ${offset})` }
            }
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
          <div className={menu_class} onClick={() => setIsMenuClicked(true)}>
            <a href="/InternalEvent">Internal Event</a>
            <a href="/ParadeWisuda">Parade Wisuda</a>
            <a href="/KabarkeSenatoran">Kabar Kesenatoran</a>
            <a href="/Geopoint">GEOPOINT</a>
            <a href="/Locus">Locus</a>
            <a href="/Geosphere">Geosphere</a>
            <a href="/IMGx">IMG-X</a>
            <a href="/login">Login</a>
            <a href="/Pemilu">Pemilu</a>
            <a href="/Pojokimg">Pojok IMG</a>

          </div>
        </div>
      ) : linkName === "/Geopoint" ||
        linkName === "/Geopoint/Navigacity" ||
        linkName === "/Geopoint/Ceremony" ? (
          <div>
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
            <div className={menu_class} onClick={() => setIsMenuClicked(true)}>
              <a href="/InternalEvent">Internal Event</a>
              <a href="/ParadeWisuda">Parade Wisuda</a>
              <a href="/KabarkeSenatoran">Kabar Kesenatoran</a>
              <a href="/Geopoint">GEOPOINT</a>
              <a href="/Locus">Locus</a>
              <a href="/Geosphere">Geosphere</a>
              <a href="/IMGx">IMG-X</a>
              <a href="/login">Login</a>
              <a href="/Pemilu">Pemilu</a>
              <a href="/Pojokimg">Pojok IMG</a>

            </div>
          </div>
        ) : linkName === "/DPM" ? null : (
          <div>
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
            <div className={menu_class} onClick={() => setIsMenuClicked(true)}>
              <a href="/InternalEvent">Internal Event</a>
              <a href="/ParadeWisuda">Parade Wisuda</a>
              <a href="/KabarkeSenatoran">Kabar Kesenatoran</a>
              <a href="/Geopoint">GEOPOINT</a>
              <a href="/Locus">Locus</a>
              <a href="/Geosphere">Geosphere</a>
              <a href="/IMGx">IMG-X</a>
              <a href="/login">Login</a>
              <a href="/Pemilu">Pemilu</a>
              <a href="/Pojokimg">Pojok IMG</a>
            </div>
          </div>
        )}
    </div>
  );
};

export default MobileNavbar;
