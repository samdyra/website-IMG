import React from "react";
import style from "./style.module.scss";
import { isMobile } from "../../Helpers/mobileResponsive";

const Modal = ({
  ModalName, open, onClose, data, children 
}) => {
  const {
    overlay,
    modalContainer,
    modalContainer2,
    content2,
    modalRight,
    closeBtn,
    modalContainer2Mobile,
    closeBtnMobile,
    modalContainerPemilu,
    modalContainerPemiluMobile,
    closeBtnMobilePemilu,
    modalContainer3,
    modalContainer3Mobile
  } = style;

  if (!open) return null;

  return (
    <div>
      {ModalName === "slider" ? (
        <div onClick={onClose} className={overlay}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            onScroll={(e) => {
              e.stopPropagation();
            }}
            className={!isMobile ? modalContainer2 : modalContainer2Mobile}
          >
            <p
              className={isMobile ? closeBtnMobile : closeBtn}
              onClick={onClose}
            >
              X
            </p>
            <div className={content2}>
              <div>
                <h1>{data.judul}</h1>
                <h2>{data.date}</h2>
                {isMobile && !data?.geo && <img src={data.image}></img>}
                <p dangerouslySetInnerHTML={{ __html:data?.redaksi ? data.redaksi : data?.desc }} />
              </div>
              {!isMobile && !data?.geo && <img src={data.image}></img>}
            </div>
          </div>
        </div>
      ) : ModalName === "geopoint" ? (
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
      ) : ModalName === "pemilu" ? (
        <div onClick={onClose} className={overlay}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            onScroll={(e) => {
              e.stopPropagation();
            }}
            className={
              !isMobile ? modalContainerPemilu : modalContainerPemiluMobile
            }
          >
            <p
              className={isMobile ? closeBtnMobilePemilu : closeBtn}
              onClick={onClose}
            >
              X
            </p>
            <div>{children}</div>
          </div>
        </div>
      ) : ModalName === "geo" ? (
        <div onClick={onClose} className={overlay}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            onScroll={(e) => {
              e.stopPropagation();
            }}
            className={!isMobile ? modalContainer3 : modalContainer3Mobile}
          >
            <p
              className={isMobile ? closeBtnMobile : closeBtn}
              onClick={onClose}
            >
              X
            </p>
            <div className={content2}>
              <div>
                <h1>{data.judul}</h1>
                <h2>{data.date}</h2>
                {isMobile && !data?.geo && <img src={data.image}></img>}
                <p dangerouslySetInnerHTML={{ __html:data?.redaksi ? data.redaksi : data?.desc }} />
              </div>
              {!isMobile && !data?.geo && <img src={data.image}></img>}
            </div>
          </div>
        </div>
      ) :
        null}
    </div>
  );
};

export default Modal;
