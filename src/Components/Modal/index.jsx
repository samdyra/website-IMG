import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import { SliderData } from "../../assets/object/SliderData";

const Modal = ({ open, onClose }) => {
  const {
    modalButton,
    overlay,
    modalContainer,
    modalRight,
    closeBtn,
    content,
    btnContainer,
    btnPrimary,
    btnOutline,
    bold,
    heading,
  } = style;

  // `${container} isTrue && ${suatukkelas}`;
  const windowOffset = window.scrollY;
  if (!open) return null;
  const [counter, setCounter] = useState(0);

  return (
    <div onClick={onClose} className={overlay}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        onScroll={(e) => {
          e.stopPropagation();
        }}
        className={modalContainer}
      >
        <img src={SliderData[1].image} alt="/" />
        <div className={modalRight}>
          <p className={closeBtn} onClick={onClose}>
            X
          </p>
          <div className={content}>
            <p>x</p>
          </div>
          {counter != 3 && counter != 0 ? (
            <div className={btnContainer}>
              <button
                className={btnPrimary}
                onClick={() => setCounter(counter + 1)}
              >
                <span className={bold}>x</span>
              </button>
              <button className={btnOutline} onClick={onClose}>
                <span className={bold}>asd</span>
              </button>
              <button className={btnPrimary} onClick={onClose}>
                <span className={bold}>Hehehe</span>
              </button>
              <button onclick="disableScroll()">Disable Scrolling</button>
              <button onclick="enableScroll()">Enable Scrolling</button>
            </div>
          ) : (
            <div className={btnContainer}>
              <button
                className={btnPrimary}
                onClick={() => setCounter(counter + 1)}
              >
                <span className={bold}>x</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
