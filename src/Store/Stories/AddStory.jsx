import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../Config/firebase/index"
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const AddStory = () => {
  const [formData, setFormData] = useState({
    nama: "",
    cerita: "",
  });
  const [user] = useAuthState(auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePublish = (e) => {
    if (!formData.nama || !formData.cerita) {
      toast("Please fill all the fields");
      return;
    }

    const storyRef = collection(db, "story");
    addDoc(storyRef, {
      nama: formData.nama,
      cerita: formData.cerita,
    })
      .then(() => {
        toast("story added successfully", { type: "success" });
      })
      .catch((err) => {
        toast("Error adding story", { type: "error" });
      });
  };

  return (
    <div className="border p-3 mt-3 bg-light" style={{ width: "300px" }}>
      {!user ? (
        <>
          <h2>
            <Link to="/login">Login to create article</Link>
          </h2>
        </>
      ) : (
        <div className="formadmincontainer">
          <div className="formtitle">Form Cerita</div>
          <div className="formadmin">
            <label htmlFor="">Nama (Boleh Anonim)</label>
            <input
              type="text"
              name="nama"
              className="formik"
              value={formData.nama}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="formadmin">
            <label htmlFor="">Curhatan</label>
            <textarea
              name="cerita"
              className="formik"
              value={formData.cerita}
              onChange={(e) => handleChange(e)}
              rows="7"
            />
          </div>
          <button className="formbutton" onClick={handlePublish}>
            Publish
          </button>
        </div>
      )}
    </div>
  );
};

export default AddStory;
