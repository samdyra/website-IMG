import React from "react";
import style from "./style.module.scss";

const Pojokimg = () => {
  const {
    containerSection,
    containerSection2,
    containerSection3,
    iconWrapper,
    iconContainer,
    menuWrapper,
    questionContainer,
    questionWrapper,
    curhatInputContainer,
    curhatHalfPage,
    curhatWrapper,
    curhatContainer,
  } = style;

  return (
    <div>
      <div className={containerSection}>
        <div>
          <h1>Arsip Kamerad</h1>
        </div>
        <div>
          <div>
            <h2>Khusus buat kamu loh, rads!</h2>
          </div>

          <div className={menuWrapper}>
            <div className={iconWrapper}>
              <div className={iconContainer}></div>
              <div className={iconContainer}></div>
              <div className={iconContainer}></div>
              <div className={iconContainer}></div>
              <div className={iconContainer}></div>
            </div>
            <div className={iconWrapper}>
              <div className={iconContainer}></div>
              <div className={iconContainer}></div>
              <div className={iconContainer}></div>
              <div className={iconContainer}></div>
              <div className={iconContainer}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={containerSection2}>
        <div>
          <h1>Get to Know Geodesy</h1>
        </div>
        <div>
          <div>
            <h2>FAQ</h2>
          </div>
          <div className={questionWrapper}>
            <div className={questionContainer}></div>
            <div className={questionContainer}></div>
            <div className={questionContainer}></div>
            <div className={questionContainer}></div>
            <div className={questionContainer}></div>
          </div>
        </div>
      </div>

      <div className={containerSection3}>
        <div className={curhatHalfPage}>
          <h1>Curhatan Kamerad</h1>
          <h2>Mau confess? Mau cerita? Disini aman kok! </h2>
          <div className={curhatWrapper}>
            <div className={curhatContainer}>
              {" "}
              ferrari 458 speciale is my dream car
            </div>
          </div>
        </div>

        <div className={curhatInputContainer}></div>
      </div>
    </div>
  );
};

export default Pojokimg;
