import React from "react";
import useLoadData from "../../Helpers/useLoadData";
import DoubleSlider from "../../Components/DoubleSlider";


const Majalah = ({ db, title }) => {
  const data = useLoadData(db);
  
  return (
    <div style={{ marginTop: "100px", }}>
      <DoubleSlider sliderName="paradewisuda" data={data} title={title}/>
    </div>
  );
};

export default Majalah;
