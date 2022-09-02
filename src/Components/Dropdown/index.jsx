import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
const Dropdown = () => {
  const { dropdown, dropbtn, dropdowncontent } = style;
  return (
    <div className={dropdown}>
      <button className={dropbtn}>
        <Link to='/'>
          prop
          </Link>
      </button>
      <div className={dropdowncontent}>
        <a href="#">prop</a>
        <a href="#">prop</a>
        <a href="#">prop</a>
      </div>
    </div>
  );
};

export default Dropdown;