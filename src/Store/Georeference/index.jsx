import React from "react";
import { useState } from "react";
import { auth } from "../../Config/firebase/index"
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import AddMessage from "./AddMessage";
import NavbarAdmin from "../components/NavbarAdmin";
import useLoadDataWithOffset from "../../Helpers/useLoadDataWithOffset";
import UseDeleteData from "../../Helpers/UseDeleteData";

const Messages = () => {
  const [ user ] = useAuthState(auth);

  const [ offset, setOffset ] = useState(1)
  const dataGeo = useLoadDataWithOffset("georeference", 3, offset)
  const loadMoreGeo = () => {
    setOffset(offset + 1);
  }

  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <div className="warning">
        GEOREFERENCE
      </div>
      <div className="testContainer">
        <div className="adminContainer">
          {dataGeo.length === 0 ? (
            <span className="visually-hidden">Loading...</span>
          ) : (
            dataGeo.map(({
              id, judul, penerbit, kategori, sarjana, tahun, abstrak 
            }) => (
              <div className="kameradContainer">
                <div key={id} className="kamerad-container-id">
                  <div className="kamerad-ids">
                    <p>{abstrak}</p>
                    <div>{`by ${penerbit}`}</div>
                    <div>{`${judul}`}</div>
                    <div>{kategori}</div>
                    <div>{sarjana}</div>
                    <div>{tahun}</div>
                    {user && <UseDeleteData id={id} type="georeference" />}
                  </div>
                </div>
              </div>
            ))
          )}
          <button className="buttonLoadMore" onClick={loadMoreGeo}>
            LOAD MORE
          </button>
        </div>
        <div>
          <AddMessage></AddMessage>
        </div>
      </div>
    </div>
  );
};

export default Messages;
