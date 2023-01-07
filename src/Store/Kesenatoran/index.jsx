import React from "react";
import { useState } from "react";
import { auth } from "../../Config/firebase/index"
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import AddStory from "./AddIsuKampus";
import NavbarAdmin from "../components/NavbarAdmin";
import AddCurhat from "./AddHeadline";
import useLoadDataWithOffset from "../../Helpers/useLoadDataWithOffset";
import UseDeleteDataWithImage from "../../Helpers/UseDeleteDataWithImage";
import UseDeleteData from "../../Helpers/UseDeleteData";

const Stories = () => {
  const [ user ] = useAuthState(auth);

  const [ offset, setOffset ] = useState(1)
  const dataIsuKampus = useLoadDataWithOffset("isuKampus", 3, offset)
  const loadMoreDataIsuKampus = () => {
    setOffset(offset + 1);
  }

  const [ offsetSenator, setOffsetSenator ] = useState(1)
  const dataSenator = useLoadDataWithOffset("headlineKesenatoran", 3, offsetSenator)
  const loadMoreSenator = () => {
    setOffsetSenator(offsetSenator + 1);
  }

  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <div className="warning">
        Isu Kampus
      </div>
      <div className="testContainer" style={{ marginBottom: 50 }}>
        <div className="adminContainer">
          {dataIsuKampus.length === 0 ? (
            <span className="visually-hidden">Loading...</span>
          ) : (
            dataIsuKampus.map(({
              id, judul, image, date, desc 
            }) => (
              <div className="kameradContainerz">
                <div key={id} className="kamerad-container-id">
                  <img src={image} style={{ width: 135, height: 135 }}></img>
                  <div className="kamerad-idz">
                    <div>{judul}</div>
                    <div>{date}</div>
                    <div>{desc}</div>
                    {user && <UseDeleteDataWithImage id={id} image={image} type="isuKampus" />}
                  </div>
                </div>
              </div>
            ))
          )}
          <button className="buttonLoadMore" onClick={loadMoreDataIsuKampus}>
            LOAD MORE
          </button>
        </div>
        <div>
          <AddStory></AddStory>
        </div>
      </div>
      <div className="warning">
        HEADLINE
      </div>
      <div className="testContainer">
        <div className="adminContainer">
          {dataSenator.length === 0 ? (
            <span className="visually-hidden">Loading...</span>
          ) : (
            dataSenator.map(({ id, headline }) => (
              <div className="kameradContainer">
                <div key={id} className="kamerad-container-id">
                  <div className="kamerad-idx">
                    <div className="kmrdnm">{headline}</div>
                    {user && <UseDeleteData id={id} type="headlineKesenatoran" />}
                  </div>
                </div>
              </div>
            ))
          )}
          <button className="buttonLoadMore" onClick={loadMoreSenator}>
            LOAD MORE
          </button>
        </div>
        <div>
          <AddCurhat></AddCurhat>
        </div>
      </div>
    </div>
  );
};

export default Stories;
