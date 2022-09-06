import { NULL } from "node-sass";
import React from "react";

const KaryaScreen = () => {

const {pageName} = props.pageName;

  return( 
  <>
    {pageName == 'georeference' ?
    (
      <div>

        <div>
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
      <div>

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
      <div>

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
    ):pageName == 'IMGX' ?
    (
      <div>

        <div>
          <div>
            <h1>IMGx</h1>
            <h3>Colaboration Project</h3>
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
    ):null

    };
  
  </>
  );
};

export default KaryaScreen;
