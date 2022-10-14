import React from "react";
import { useState, useEffect } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../Config/firebase/index"
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import DeleteStory from "./DeleteFAQ";
import AddStory from "./AddFAQ";
// import { orderBy } from "firebase/firestore";
import NavbarAdmin from "../components/NavbarAdmin";
import AddCurhat from "./AddCurhat";
import DeleteCurhat from "./DeleteCurhat";
const Stories = () => {
  const [story, setStory] = useState([]);
  const [curhat, setCurhat] = useState([]);

  const [user] = useAuthState(auth);

  useEffect(() => {
    const storyRef = collection(db, "FAQ");
    const q = query(storyRef);
    onSnapshot(q, (snapshot) => {
      const story = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStory(story);
    });
  }, []);

  useEffect(() => {
    const storyRef = collection(db, "curhat");
    const q = query(storyRef);
    onSnapshot(q, (snapshot) => {
      const story = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCurhat(story);
    });
  }, []);

  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <div className="warning">
      FAQ
      </div>
      <div className="testContainer" style={{marginBottom: 50}}>
        <div className="adminContainer">
          {story.length === 0 ? (
            <span className="visually-hidden">Loading...</span>
          ) : (
            story.map(({ id, tanya, jawab }) => (
              <div className="kameradContainer">
                <div key={id} className="kamerad-container-id">
                  <div className="kamerad-idx">
                    <div className="kmrdnm">{tanya}</div>
                    <div className="kmrdcrt">{jawab}</div>
                    {user && <DeleteStory id={id} />}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div>
          <AddStory></AddStory>
        </div>
      </div>
      <div className="warning">
      CURHAT
      </div>
      <div className="testContainer">
        <div className="adminContainer">
          {curhat.length === 0 ? (
            <span className="visually-hidden">Loading...</span>
          ) : (
            curhat.map(({ id, curhat }) => (
              <div className="kameradContainer">
                <div key={id} className="kamerad-container-id">
                  <div className="kamerad-idx">
                    <div className="kmrdnm">{curhat}</div>
                    {user && <DeleteCurhat id={id} />}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div>
          <AddCurhat></AddCurhat>
        </div>
      </div>
    </div>
  );
};

export default Stories;
