import React from "react";
import style from "./style.module.scss";

const Geosphere = () => {
  const {
    container,
    desc,
    logo,
    welcome,
    containerSection,
    judulSection2,
    descSection2,
    nilai,
    judulSection3,
    organogram,
  } = style;

  return (
    <div className={container}>
      <div className={containerSection}>
        <div>
          <h3>Majalah Keprofesian</h3>
          <h1>GEOSPHERE</h1>
        </div>
        <div>
          <p>bla bla bla bla bla bla bla bla bla bla balab alba</p>
        </div>
      </div>

      <div className={containerSection}>
        <div>list majalah</div>
      </div>

      <div className={containerSection}>
        <div>list majalah</div>
      </div>
    </div>
  );
};

export default Geosphere;
