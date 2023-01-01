import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Dropdown = (props) => {
  const { dropdown, dropbtn, dropdowncontent, dropdowncontentGeopoint } = style;
  const menuName = props.menuName;

  const location = useLocation();

  const linkName = location.pathname;


  // : linkName === "/Geopoint" || linkName === "/Geopoint/Navigacity" ?
  return (
    <div style={{ marginRight: 12 }}>
      <div className={dropdown}>
        {menuName == "activities" ? (
          <>
            <button className={dropbtn}>
              <h1>Activities</h1>
            </button>
            <div
              className={
                linkName === "/Geopoint" || linkName === "/Geopoint/Navigacity"
                  ? dropdowncontentGeopoint
                  : dropdowncontent
              }
            >
              <a href="/InternalEvent">Internal Event</a>
              <a href="/ParadeWisuda">Parade Wisuda</a>

              <a href="/KabarkeSenatoran">Kabar Kesenatoran</a>
              <a href="/Geopoint">GEOPOINT</a>
            </div>
          </>
        ) : menuName == "karya" ? (
          <>
            <button className={dropbtn}>
              <h1>Karya</h1>
            </button>
            <div
              className={
                linkName === "/Geopoint" || linkName === "/Geopoint/Navigacity"
                  ? dropdowncontentGeopoint
                  : dropdowncontent
              }
            >
              <a href="/Locus">Locus</a>
              <a href="/Geosphere">Geosphere</a>
              <a href="/IMGx">IMG-X</a>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
