import React from "react";
import style from "./style.module.scss";

const Header = () => {
  const { container, content } = style;
  return (
    <div className={container}>
      <div className={content}>
        <h1>Ikatan Mahasiswa Geodesi</h1>
        <p>
          blablablalbalbalbalbalblalbalblablalbalblablalbalblalbalbalblablalbalbalblabla
        </p>
      </div>
    </div>
  );
};

export default Header;
