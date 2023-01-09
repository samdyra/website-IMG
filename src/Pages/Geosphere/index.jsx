import React from "react";
import Header from "../../Components/HeaderPage";
import background from "../../assets/images/intel.png";
import { Majalah } from "../../Components";


const Geosphere = () => {
  const title = "GEOSPHERE";
  const desc = "Geosphere merupakan majalah keilmuan yang memiliki tujuan untuk mengenalkan serta memberikan wawasan kepada pembaca seputar keilmuan dan keprofesian Teknik Geodesi dan Geomatika."
  return (
    <div>
      <Header title={title} desc={desc} background={background} />
      <Majalah db="geosphere" title="GEOSPHERE" />
    </div>
  );
};

export default Geosphere;
