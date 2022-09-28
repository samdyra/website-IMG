import React from "react";
import style from "./style.module.scss";

const studentChapter = () => {
  const { container, containerSection, box1, box2 } = style;
  return (
    <div>
      <div className={containerSection}>
        <h1>Studen Chapter</h1>
      </div>
    </div>
  );
};

export default studentChapter;
