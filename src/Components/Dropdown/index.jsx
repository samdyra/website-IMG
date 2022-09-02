import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
const Dropdown = (props) => {
  const { dropdown, dropbtn, dropdowncontent } = style;
  const menuName = props.menuName;

  return (
    <div className={dropdown}>
      <button className={dropbtn}>
        { menuName == "activities" ?
        (  
        <Link to='/'>
          Activities
          </Link>
          )
          :menuName == "karya" ?   
          (
          <Link to='/'>
          Karya
          </Link>
          )
          :
          (
          <Link to='/'>
          pojok img
          </Link>
          )
        }
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