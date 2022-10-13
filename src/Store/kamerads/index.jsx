import React from "react";
import { useState, useEffect } from "react";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { auth, db } from "../../Config/firebase/index";
import AddKamerad from "./AddKamerad";
import "./index.css";
import DeleteKamerad from "./DeleteKamerad";
import { useAuthState } from "react-firebase-hooks/auth";

const Kamerads = () => {
  const [kamerad, setKamerad] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const kameradRef = collection(db, "kamerad");
    const q = query(kameradRef, orderBy("kelompok"));
    onSnapshot(q, (snapshot) => {
      const kamerads = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setKamerad(kamerads);
    });
  }, []);

  const groupedKamerad = kamerad.reduce((groupedKamerad, kamerad) => {
    const kelompok = kamerad.klmpkID;
    if (groupedKamerad[kelompok] == null) groupedKamerad[kelompok] = [];
    groupedKamerad[kelompok].push(kamerad);
    return groupedKamerad;
  }, {});

  return (
    <div>

      <div className="admin-navbar">
        <a href="/admin/kelompok">Kamerad</a>
        <a href="/admin/Gallery">Gallery</a>
        <a href="/admin/kesanpesan">Kesan Pesan</a>
        <a href="/admin/story">Kotak Pesan</a>
      </div>
      <div className="warning">
        Jangan delete yang punya orang lain ya..
        <br></br>boleh delete yg diri sendiri, terus publish yang diri sendiri
        kalo mau ganti foto{" "}
      </div>
      <div className="testContainer">
        <div className="adminContainer">
          {kamerad.length === 0 ? (
            <span className="visually-hidden">Loading...</span>
          ) : (
            kamerad.map(({ id, Nama, image, kelompok }) => (
              <div className="kameradContainerz">
                <div key={id} className="kamerad-container-id">
                  <img src={image} style={{ width: 135, height: 135 }}></img>
                  <div className="kamerad-idz">
                    <div>{Nama}</div>
                    <div>{`Kelompok: ${kelompok}`}</div>
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
    </div>
  );
};

export default Kamerads;
