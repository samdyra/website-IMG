import React from "react";
import { useState } from "react";
import { auth } from "../../Config/firebase/index";
import AddKamerad from "./AddMajalah";
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import NavbarAdmin from "../components/NavbarAdmin";
import useLoadDataWithOffset from "../../Helpers/useLoadDataWithOffset";
import UseDeleteDataWithImage from "../../Helpers/UseDeleteDataWithImage";

const Kamerads = () => {
  const [ user ] = useAuthState(auth);

  const [ offset, setOffset ] = useState(1)
  const dataMajalah = useLoadDataWithOffset("locus", 3, offset)
  const loadMoreKegiatan = () => {
    setOffset(offset + 1);
  }

  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <div style={{ marginBottom: 300 }}>
        <div className="warning" >Majalah LOCUS</div>
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
                      {user && <UseDeleteDataWithImage id={id} image={image} type="locus" collection="locus"/>}
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
      </div>
    </div>
  );
};

export default Kamerads;
