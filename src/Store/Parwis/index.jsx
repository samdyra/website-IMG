import React from "react";
import { useState } from "react";
import { auth } from "../../Config/firebase/index";
import AddKamerad from "./AddMajalah";
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import NavbarAdmin from "../components/NavbarAdmin";
import AddImage from "./AddImage";
import useLoadDataWithOffset from "../../Helpers/useLoadDataWithOffset";
import UseDeleteDataWithImage from "../../Helpers/UseDeleteDataWithImage";

const Kamerads = () => {
  const [ user ] = useAuthState(auth);

  const [ offset, setOffset ] = useState(1)
  const dataMajalah = useLoadDataWithOffset("majalah", 3, offset)
  const loadMoreKegiatan = () => {
    setOffset(offset + 1);
  }

  const [ offsetFoto, setOffsetFoto ] = useState(1)
  const dataFoto = useLoadDataWithOffset("fotoParwis", 3, offsetFoto)
  const loadMoreFoto = () => {
    setOffsetFoto(offsetFoto + 1);
  }

  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <div style={{ marginBottom: 300 }}>
        <div className="warning" >Majalah</div>
        <div className="testContainer" style={{ marginBottom: 100 }}>
          <div className="adminContainer">
            {dataMajalah.length === 0 ? (
              <span className="visually-hidden">Loading...</span>
            ) : (
              dataMajalah.map(({
                id, judul, desc, pdf, image 
              }) => (
                <div className="kameradContainerz">
                  <div key={id} className="kamerad-container-id">
                    <img src={image} style={{ width: 135, height: 135 }}></img>
                    <div className="kamerad-idz">
                      <div>{judul}</div>
                      <div>{pdf}</div>
                      <div>{desc}</div>
                      {/* <div>{pembuat}</div> */}
                      {user && <UseDeleteDataWithImage id={id} image={image} type="majalah" collection="majalah"/>}
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
                      {user && <UseDeleteDataWithImage id={id} image={image} type="fotoParwis" collection="fotoParwis"/>}
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
