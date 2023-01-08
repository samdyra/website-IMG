import React from "react";
import style from "./style.module.scss";

const Header = (props) => {
  const { container, content } = style;
  return (
    <div className={container} style={{ backgroundImage: `url(${props.background})` }}>
      <div className={content}>
        <h1>{props.title}</h1>
        <p>
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default Header;
