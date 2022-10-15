import React from "react";
import { useState, useEffect } from "react";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { auth, db } from "../../Config/firebase/index"
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import AddMessage from "./AddMessage";
import DeleteMessage from "./DeleteMessage";
import NavbarAdmin from "../components/NavbarAdmin";

const Messages = () => {
  const [message, setMessage] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const messageRef = collection(db, "georeference");
    const q = query(messageRef);
    onSnapshot(q, (snapshot) => {
      const message = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessage(message);
    });
  }, []);

  return (
    <div>
     <NavbarAdmin></NavbarAdmin>
      <div className="warning">
       GEOREFERENCE
      </div>
      <div className="testContainer">
        <div className="adminContainer">
          {message.length === 0 ? (
            <span className="visually-hidden">Loading...</span>
          ) : (
            message.map(({ id, judul, penerbit, kategori, sarjana, tahun, abstrak }) => (
              <div className="kameradContainer">
                <div key={id} className="kamerad-container-id">
                  <div className="kamerad-ids">
                    <p>{abstrak}</p>
                    <div>{`by ${penerbit}`}</div>
                    <div>{`${judul}`}</div>
                    <div>{kategori}</div>
                    <div>{sarjana}</div>
                    <div>{tahun}</div>
                    {user && <DeleteMessage id={id} />}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div>
          <AddMessage></AddMessage>
        </div>
      </div>
    </div>
  );
};

export default Messages;
