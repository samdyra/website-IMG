import React from "react";
import style from "./style.module.scss";

const Georeference = () => {
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
          <h3>Majalah keprofesian</h3>
          <h1>Georeference</h1>
          <h2>Ikatan Mahasiswa Geodesi ITB</h2>
        </div>
        <div>
          <p>bla bla bla bla bla bla bla bla bla bla balab alba</p>
        </div>
      </div>

      <div className={containerSection}>
        <div>list paper</div>
      </div>

      <div className={containerSection}>
        <div>list paper</div>
      </div>
    </div>
  );
};

export default Georeference;
