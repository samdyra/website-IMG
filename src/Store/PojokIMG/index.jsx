import React from "react";
import { useState } from "react";
import { auth } from "../../Config/firebase/index"
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import AddStory from "./AddFAQ";
import NavbarAdmin from "../components/NavbarAdmin";
import useLoadDataWithOffset from "../../Helpers/useLoadDataWithOffset";
import UseDeleteData from "../../Helpers/UseDeleteData";

const Stories = () => {

  const [ user ] = useAuthState(auth);

  const [ offset, setOffset ] = useState(1)
  const dataFAQ = useLoadDataWithOffset("FAQ", 3, offset)
  const loadMoreKegiatan = () => {
    setOffset(offset + 1);
  }

  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <div className="warning">
        FAQ
      </div>
      <div className="testContainer" style={{ marginBottom: 50 }}>
        <div className="adminContainer">
          {dataFAQ.length === 0 ? (
            <span className="visually-hidden">Loading...</span>
          ) : (
            dataFAQ.map(({
              id, tanya, jawab 
            }) => (
              <div className="kameradContainer">
                <div key={id} className="kamerad-container-id">
                  <div className="kamerad-idx">
                    <div className="kmrdnm">{tanya}</div>
                    <div className="kmrdcrt">{jawab}</div>
                    {user && <UseDeleteData id={id} type="FAQ" />}
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
          <AddStory></AddStory>
        </div>
      </div>
    </div>
  );
};

export default Stories;
