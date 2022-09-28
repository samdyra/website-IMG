import React from "react";
import style from "./style.module.scss";

const kabarKesenatoran = () => {
  const { container, containerSection, box1, box2 } = style;

  return (
    <div>
      <div className={containerSection}>
        <h1>Kabar Kesenatoran</h1>
      </div>
    </div>
  );
};

export default kabarKesenatoran;
