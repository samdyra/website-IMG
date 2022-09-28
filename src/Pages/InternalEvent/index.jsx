import React from "react";
import style from "./style.module.scss";
import Gallery from "../../Components/Slider";

const internalEvent = () => {
  const { container, containerSection } = style;

  return (
    <>
      <div className={container}>
        <div className={containerSection}>
          <div>
            <h1>Internal Events in IMG-ITB</h1>
          </div>
          <div>
            <h2>Our Internal Event Dates</h2>
            <button>Click Here</button>
          </div>
          <Gallery sliderName="verticalcard" />
        </div>
      </div>
    </>
  );
};

export default internalEvent;
