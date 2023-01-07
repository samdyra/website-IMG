import React from "react";
import { useState } from "react";
import { auth } from "../../Config/firebase/index";
import AddKamerad from "./AddActivities";
import "./index.css";

import { useAuthState } from "react-firebase-hooks/auth";
import NavbarAdmin from "../components/NavbarAdmin";
import useLoadDataWithOffset from "../../Helpers/useLoadDataWithOffset";
import UseDeleteDataWithImage from "../../Helpers/UseDeleteDataWithImage";

const Kamerads = () => {

  const [ user ] = useAuthState(auth);

  const [ offset, setOffset ] = useState(1)
  const dataInternal = useLoadDataWithOffset("internal", 3, offset)
  const loadMoreKegiatan = () => {
    setOffset(offset + 1);
  }

  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <div style={{ marginBottom: 300 }}>
        <div className="warning" >INTERNAL</div>
        <div className="testContainer" style={{ marginBottom: 100 }}>
          <div className="adminContainer">
            {dataInternal.length === 0 ? (
              <span className="visually-hidden">Loading...</span>
            ) : (
              dataInternal.map(({
                id, judul, pembuat, desc, date, image 
              }) => (
                <div className="kameradContainerz">
                  <div key={id} className="kamerad-container-id">
                    <img src={image} style={{ width: 135, height: 135 }}></img>
                    <div className="kamerad-idz">
                      <div>{judul}</div>
                      <div>{date}</div>
                      <div>{desc}</div>
                      <div>{pembuat}</div>
                      {user && <UseDeleteDataWithImage id={id} image={image} type="internal" collection="internal"/>}
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
