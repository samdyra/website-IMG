import React from "react";
import { useState, useEffect } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../Config/firebase/index"
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import DeleteStory from "./DeleteIsuKampus";
import AddStory from "./AddIsuKampus";
// import { orderBy } from "firebase/firestore";
import NavbarAdmin from "../components/NavbarAdmin";
import AddCurhat from "./AddHeadline";
import DeleteCurhat from "./DeleteHeadline";
const Stories = () => {
  const [story, setStory] = useState([]);
  const [headline, setHeadline] = useState([]);

  const [user] = useAuthState(auth);

  useEffect(() => {
    const storyRef = collection(db, "isuKampus");
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
    const storyRef = collection(db, "headlineKesenatoran");
    const q = query(storyRef);
    onSnapshot(q, (snapshot) => {
      const story = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHeadline(story);
    });
  }, []);

  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <div className="warning">
      Isu Kampus
      </div>
      <div className="testContainer" style={{marginBottom: 50}}>
        <div className="adminContainer">
          {story.length === 0 ? (
            <span className="visually-hidden">Loading...</span>
          ) : (
            story.map(({ id, judul, image, date, desc }) => (
              <div className="kameradContainerz">
                  <div key={id} className="kamerad-container-id">
                    <img src={image} style={{ width: 135, height: 135 }}></img>
                    <div className="kamerad-idz">
                      <div>{judul}</div>
                      <div>{date}</div>
                      <div>{desc}</div>
                      {user && <DeleteStory id={id} image={image} />}
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
      HEADLINE
      </div>
      <div className="testContainer">
        <div className="adminContainer">
          {headline.length === 0 ? (
            <span className="visually-hidden">Loading...</span>
          ) : (
            headline.map(({ id,  headline}) => (
              <div className="kameradContainer">
                <div key={id} className="kamerad-container-id">
                  <div className="kamerad-idx">
                    <div className="kmrdnm">{headline}</div>
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
