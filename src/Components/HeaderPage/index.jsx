import React from "react";
import style from "./style.module.scss";

const Header = (props) => {
  const {
    container, content, containerSenator 
  } = style;
  return (
    <div className={!props.isSenator ? container : containerSenator} style={{ backgroundImage: `url(${props.background})` }}>
      <div className={content}>
        {props.isSenator && <h1>Kabar Ke<span style={{ color: "#D3C755" }}>senator</span>an</h1>}
        <h1>{props.title}</h1>
        <p>
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default Header;
