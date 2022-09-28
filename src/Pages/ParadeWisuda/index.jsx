import React from "react";
import style from "./style.module.scss";

const paradeWisuda = () => {
  const { container, containerSection, box1, box2 } = style;

  return (
    <div>
      <div className={containerSection}>
        <div>
          <h1>Parade Wisuda</h1>
          <h1>IMG-ITB</h1>
        </div>
        <div>
          <p>blablabalbablabalbal</p>
        </div>
      </div>
    </div>
  );
};

export default paradeWisuda;
