import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import { SliderData } from "../../assets/object/SliderData";
import { gegepmodal } from "../../assets";

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
        <div className={modalRight}>
          <p className={closeBtn} onClick={onClose}>
            X
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
