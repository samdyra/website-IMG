import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
const Dropdown = (props) => {
  const { dropdown, dropbtn, dropdowncontent } = style;
  const menuName = props.menuName;

  return (
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
            <a href="/Karya/Georeference">Georeference</a>
            <a href="/Karya/Locus">Locus</a>
            <a href="/Karya/Geosphere">Geosphere</a>
            <a href="/Karya/IMGx">IMG-X</a>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Dropdown;
