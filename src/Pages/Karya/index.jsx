
import React from "react";
import style from "./style.module.scss"

const KaryaScreen = (props) => {
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
    organogram 
  } = style;
const pageName = props.pageName;

  return( 
  <div>
    {pageName == 'georeference' ?
    (
      <div>

        <div className={containerSection}>
          <div>
            <h3>Majalah Ilmiah</h3>
            <h1>Georeference</h1>
            <h2>Ikatan Mahasiswa Geodesi  ITB</h2>
          </div>
          <div>
            <p>bla bla bla bla bla bla bla bla bla bla balab alba</p>
        </div>
        </div>

      <div>
        <div>
          list paper
        </div>
      </div>

      <div>
        <div>
          list paper
        </div>
      </div>

    </div>
    ) :pageName == 'locus' ?
    (
      <div className={containerSection}>
        <div>
          <div>
            <h3>Majalah Internal</h3>
            <h1>LOCUS</h1>
          </div>
          <div>
            <p>bla bla bla bla bla bla bla bla bla bla balab alba</p>
        </div>
        </div>

      <div>
        <div>
          list majalah
        </div>
      </div>

      <div>
        <div>
          list majalah
        </div>
      </div>
    </div>

    ):pageName == 'geosphere' ?
    (
      <div className={containerSection}>

        <div>
          <div>
            <h3>Majalah Keprofesian</h3>
            <h1>GEOSPHERE</h1>
          </div>
          <div>
            <p>bla bla bla bla bla bla bla bla bla bla balab alba</p>
        </div>
        </div>

      <div>
        <div>
          list majalah
        </div>
      </div>

      <div>
        <div>
          list majalah
        </div>
      </div>

    </div>
    ):pageName == "IMGX" ?
    (
      <div className={container}>

        <div className={containerSection}>
          <div>
            <h1>IMGx</h1>
            <h3>Colaboration Project</h3>
          </div>
          <div>
            <p>bla bla bla bla bla bla bla bla bla bla balab alba</p>
        </div>
        </div>

      <div className={containerSection}>
        <div>
          list majalah
        </div>
      </div>

      <div className={containerSection}>
        <div>
          list majalah
        </div>
      </div>

    </div>
    ):null

    };
  
  </div>
  );
};

export default KaryaScreen;
