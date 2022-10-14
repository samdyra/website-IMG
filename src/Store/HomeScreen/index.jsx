import React from "react";
import { useState, useEffect } from "react";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { auth, db } from "../../Config/firebase/index";
import AddKamerad from "./AddKegiatan";
import AddImage from "./AddImage";
import "./index.css";
import DeleteKamerad from "./DeleteKegiatan";
import DeleteImage from "./DeleteImage";
import { useAuthState } from "react-firebase-hooks/auth";
import NavbarAdmin from "../components/NavbarAdmin";

const Kamerads = () => {
  const [kamerad, setKamerad] = useState([]);
  const [foto, setFoto] = useState([]);

  const [user] = useAuthState(auth);

  useEffect(() => {
    const kameradRef = collection(db, "kegiatan");
    const q = query(kameradRef, orderBy("date"));
    onSnapshot(q, (snapshot) => {
      const kamerads = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setKamerad(kamerads);
    });
  }, []);

  useEffect(() => {
    const kameradRef = collection(db, "foto");
    const q = query(kameradRef);
    onSnapshot(q, (snapshot) => {
      const kamerads = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFoto(kamerads);
    });
  }, []);
  console.log(foto)
  const groupedKamerad = kamerad.reduce((groupedKamerad, kamerad) => {
    const kelompok = kamerad.klmpkID;
    if (groupedKamerad[kelompok] == null) groupedKamerad[kelompok] = [];
    groupedKamerad[kelompok].push(kamerad);
    return groupedKamerad;
  }, {});

  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <div style={{ marginBottom: 300 }}>
        <div className="warning" >KEGIATAN</div>
        <div className="testContainer" style={{marginBottom: 100}}>
          <div className="adminContainer">
            {kamerad.length === 0 ? (
              <span className="visually-hidden">Loading...</span>
            ) : (
              kamerad.map(({ id, nama, image, date, redaksi }) => (
                <div className="kameradContainerz">
                  <div key={id} className="kamerad-container-id">
                    <img src={image} style={{ width: 135, height: 135 }}></img>
                    <div className="kamerad-idz">
                      <div>{nama}</div>
                      <div>{date}</div>
                      <div>{redaksi}</div>
                      {user && <DeleteKamerad id={id} image={image} />}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div>
            <AddKamerad></AddKamerad>
          </div>
        </div>
        <div className="warning">FOTO</div>
        <div className="testContainer">
          <div className="adminContainer">
            {foto.length === 0 ? (
              <span className="visually-hidden">Loading...</span>
            ) : (
              foto.map(({ id, image }) => (
                <div className="kameradContainerz">
                  <div key={id} className="kamerad-container-id">
                    <img src={image} style={{ width: 150, height: 150 }}></img>
                    <div className="kamerad-idz">
                      {user && <DeleteImage id={id} image={image} />}
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
    </div>
  );
};

export default Kamerads;
