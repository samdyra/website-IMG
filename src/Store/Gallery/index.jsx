import React from "react";
import { useState, useEffect } from "react";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { auth, db } from "../../Config/firebase/index";
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import AddImage from "./AddImage";
import DeleteImage from "./DeleteImage";
import NavbarAdmin from "../components/NavbarAdmin";
const Gallery = () => {
  const [image, setImage] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const imageRef = collection(db, "gallery");
    const q = query(imageRef);
    onSnapshot(q, (snapshot) => {
      const images = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImage(images);
    });
  }, []);
  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <div className="warning">
        foto2 yang dimasukin kesini bakal muncul di gallery <br></br>
        di landing page guys, jangan masukin foto yang engga engga ya, nangisss
      </div>
      <div className="testContainerIMG">
        <div className="adminContainerIMG">
          {image.length === 0 ? (
            <span className="visually-hidden">Loading...</span>
          ) : (
            image.map(({ id, image, name }) => (
              <div className="kameradContainerIMG">
                <div key={id} className="kamerad-container-idIMG">
                  <img src={image} style={{ width: 200, height: 200 }}></img>
                  <div className="kamerad-idIMG">
                    <p>{name}</p>
                    <div className="deletegallery">
                      {user && <DeleteImage id={id} image={image} />}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div>
          <AddImage></AddImage>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
