import React from "react";
import { useState, useEffect } from "react";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { auth, db } from "../../Config/firebase/index";
import AddKamerad from "./AddActivities";
import "./index.css";
import DeleteKamerad from "./DeleteActivities";
import { useAuthState } from "react-firebase-hooks/auth";
import NavbarAdmin from "../components/NavbarAdmin";

const Kamerads = () => {
  const [kamerad, setKamerad] = useState([]);
  const [foto, setFoto] = useState([]);

  const [user] = useAuthState(auth);

  useEffect(() => {
    const kameradRef = collection(db, "internal");
    const q = query(kameradRef, orderBy("date"));
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
      <NavbarAdmin></NavbarAdmin>
      <div style={{ marginBottom: 300 }}>
        <div className="warning" >INTERNAL</div>
        <div className="testContainer" style={{marginBottom: 100}}>
          <div className="adminContainer">
            {kamerad.length === 0 ? (
              <span className="visually-hidden">Loading...</span>
            ) : (
              kamerad.map(({ id, judul, pembuat, desc, date, image }) => (
                <div className="kameradContainerz">
                  <div key={id} className="kamerad-container-id">
                    <img src={image} style={{ width: 135, height: 135 }}></img>
                    <div className="kamerad-idz">
                      <div>{judul}</div>
                      <div>{date}</div>
                      <div>{desc}</div>
                      <div>{pembuat}</div>
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
    </div>
  );
};

export default Kamerads;
