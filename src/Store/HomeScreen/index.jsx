import React from "react";
import { useState } from "react";
import { auth } from "../../Config/firebase/index";
import AddKamerad from "./AddKegiatan";
import AddImage from "./AddImage";
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import NavbarAdmin from "../components/NavbarAdmin";
import useLoadDataWithOffset from "../../Helpers/useLoadDataWithOffset";
import UseDeleteDataWithImage from "../../Helpers/useDeleteDataWithImage";

const Kamerads = () => {
  const [ user ] = useAuthState(auth),

    [ offset, setOffset ] = useState(1),
    dataKegiatan = useLoadDataWithOffset("kegiatan", 3, offset),
    loadMoreKegiatan = () => {
      setOffset(offset + 1);
    },
    

    [ offsetImage, setOffsetImage ] = useState(1),
    dataFoto = useLoadDataWithOffset("fotoHome", 3, offsetImage),
    loadMoreFoto = () => {
      setOffsetImage(offsetImage + 1);
    };

  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <div style={{ marginBottom: 300 }}>
        <div className="warning">KEGIATAN</div>
        <div className="testContainer" style={{ marginBottom: 100 }}>
          <div className="adminContainer">
            {dataKegiatan.length === 0 ? (
              <span className="visually-hidden">Loading...</span>
            ) : (
              dataKegiatan.map(({
                id, judul, image, date, redaksi 
              }) => (
                <div className="kameradContainerz">
                  <div key={id} className="kamerad-container-id">
                    <img src={image} style={{ width: 135, height: 135 }}></img>
                    <div className="kamerad-idz">
                      <div>{judul}</div>
                      <div>{date}</div>
                      <div>{redaksi}</div>
                      {user && <UseDeleteDataWithImage id={id} image={image} type="kegiatan" collection="kegiatan"/>}
                    </div>
                  </div>
                </div>
              ))
            )}
            <button className="buttonLoadMore" onClick={loadMoreKegiatan}>
              LOAD MORE
            </button>
          </div>
          <div>
            <AddKamerad></AddKamerad>
          </div>
        </div>
        <div className="warning">FOTO</div>
        <div className="testContainer">
          <div className="adminContainer">
            {dataFoto.length === 0 ? (
              <span className="visually-hidden">Loading...</span>
            ) : (
              dataFoto.map(({ id, image }) => (
                <div className="kameradContainerz">
                  <div key={id} className="kamerad-container-id">
                    <img src={image} style={{ width: 150, height: 150 }}></img>
                    <div className="kamerad-idz">
                      {user && <UseDeleteDataWithImage id={id} image={image} type="fotoHome" />}
                    </div>
                  </div>
                </div>
              ))
            )}
            <button className="buttonLoadMore" onClick={loadMoreFoto}>
              LOAD MORE
            </button>
          </div>
          <div>
            <AddImage></AddImage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kamerads;
