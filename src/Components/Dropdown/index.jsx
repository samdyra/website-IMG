import React from "react";
import style from "./style.module.scss";

const Dropdown = () => {
  const { dropdown, dropbtn, dropdowncontent } = style;
  return (
    <div className={dropdown}>
      <button className={dropbtn}>
        prop
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