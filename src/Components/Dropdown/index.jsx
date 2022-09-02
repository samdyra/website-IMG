import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
const Dropdown = (props) => {
  const { dropdown, dropbtn, dropdowncontent } = style;
  const menuName = props.menuName;

  return (
    <div className={dropdown}>
      
        { menuName == "activities" ?
        (
          <>
            <button className={dropbtn}>  
              <Link to='/'>
              Activities
              </Link>
            </button>
            <div className={dropdowncontent}>
              <a href="#">Internal Event</a>
              <a href="#">Parade Wisuda</a>
              <a href="#">Student Chapter</a>
              <a href="#">Kabar Kesenatoran</a>
            </div>
        </>

          )
          :menuName == "karya" ?   
          (
          <>
            <button className={dropbtn}>  
              <Link to='/'>
              Karya
              </Link>
            </button>
            <div className={dropdowncontent}>
              <a href="#">Georeference</a>
              <a href="#">Locus</a>
              <a href="#">Geosphere</a>
              <a href="#">IMG-X</a>
            </div>
          </>
          )
          :null
        }
    </div>
  );
};

export default Dropdown;