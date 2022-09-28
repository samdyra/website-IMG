import React from "react";
import style from "./style.module.scss";

const Locus = () => {
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
          <h3>Majalah Internal</h3>
          <h1>LOCUS</h1>
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

export default Locus;
