import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
const Dropdown = (props) => {
  const { dropdown, dropbtn, dropdowncontent } = style;
  const menuName = props.menuName;

  return (
    <div style={{marginRight: 12}}>
    <div className={dropdown}>
      {menuName == "activities" ? (
        <>
          <button className={dropbtn}>
            <h1>Activities</h1>
          </button>
          <div className={dropdowncontent}>
            <a href="/InternalEvent">Internal Event</a>
            <a href="/ParadeWisuda">Parade Wisuda</a>
            <a href="/StudentChapter">Student Chapter</a>
            <a href="/KabarkeSenatoran">Kabar Kesenatoran</a>
            <a href="/Geopoint">GEOPOINT</a>
          </div>
        </>
      ) : menuName == "karya" ? (
        <>
          <button className={dropbtn}>
            <h1>Karya</h1>
          </button>
          <div className={dropdowncontent}>
            <a href="/Georeference">Georeference</a>
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
