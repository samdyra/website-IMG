import React from "react";
import { useState, useEffect } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../Config/firebase/index"
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import DeleteStory from "./DeleteStory";
import AddStory from "./AddStory";
import { orderBy } from "firebase/firestore";
import NavbarAdmin from "../components/NavbarAdmin";
const Stories = () => {
  const [story, setStory] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const storyRef = collection(db, "story");
    const q = query(storyRef, orderBy("cerita"));
    onSnapshot(q, (snapshot) => {
      const story = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStory(story);
    });
  }, []);

  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <div className="warning">
        Silahkan bagi yang ingin berkeluh kesah tentang Kemker <br></br>
        atau mau sambat ke tim M dan Q silahkan.
      </div>
      <div className="testContainer">
        <div className="adminContainer">
          {story.length === 0 ? (
            <span className="visually-hidden">Loading...</span>
          ) : (
            story.map(({ id, nama, cerita }) => (
              <div className="kameradContainer">
                <div key={id} className="kamerad-container-id">
                  <div className="kamerad-idx">
                    <div className="kmrdnm">{`By: ${nama}`}</div>
                    <div className="kmrdcrt">{`${cerita}`}</div>
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
    </div>
  );
};

export default Stories;
