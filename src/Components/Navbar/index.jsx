import React from "react";
import style from "./Navbar.module.scss";
import LogoIMG from "../../assets/images/LogoIMG.png";
import login from "../../assets/images/login.png";
import { useState } from "react";
import Dropdown from "../Dropdown";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
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
  } = style;
  const [fix, setFix] = useState(false);

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
    return setOffset(window.pageYOffset / 700);
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
      ) : linkName === "/dpm" ? null : (
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

export default Navbar;
