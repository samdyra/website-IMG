import React from "react";
import { useState, useEffect } from "react";
import {
  query, collection, onSnapshot 
} from "firebase/firestore";
import { auth, db } from "../../Config/firebase/index"
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import DeleteStory from "./DeleteFAQ";
import AddStory from "./AddFAQ";
import NavbarAdmin from "../components/NavbarAdmin";

const Stories = () => {
  const [ story, setStory ] = useState([]);

  const [ user ] = useAuthState(auth);

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

  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <div className="warning">
        FAQ
      </div>
      <div className="testContainer" style={{ marginBottom: 50 }}>
        <div className="adminContainer">
          {story.length === 0 ? (
            <span className="visually-hidden">Loading...</span>
          ) : (
            story.map(({
              id, tanya, jawab 
            }) => (
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
    </div>
  );
};

export default Stories;
