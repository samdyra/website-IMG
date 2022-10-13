import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../Config/firebase/index"
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "../Stories/index.css";

const AddMessage = () => {
  const [formData, setFormData] = useState({
    message: "",
    nama: "",
    nim: "",
  });
  const [user] = useAuthState(auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePublish = (e) => {
    if (!formData.message || !formData.nama || !formData.nim) {
      toast("Please fill all the fields");
      return;
    }

    const messageRef = collection(db, "message");
    addDoc(messageRef, {
      message: formData.message,
      nama: formData.nama,
      nim: formData.nim,
    })
      .then(() => {
        toast("message added successfully", { type: "success" });
      })
      .catch((err) => {
        toast("Error adding article", { type: "error" });
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
          <div className="formtitle">Kesan Pesan</div>
          <div className="formadmin">
            <label htmlFor="">Nama</label>
            <input
              type="text"
              name="nama"
              className="formik"
              value={formData.nama}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="formadmin">
            <label htmlFor="">NIM / Jabatan</label>
            <input
              type="text"
              name="nim"
              className="formik"
              value={formData.nim}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="formadmin">
            <label htmlFor="">kesan pesan</label>
            <textarea
              name="message"
              className="formik"
              value={formData.message}
              onChange={(e) => handleChange(e)}
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

export default AddMessage;
