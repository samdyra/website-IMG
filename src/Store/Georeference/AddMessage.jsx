import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../Config/firebase/index";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "../PojokIMG/index.css";

const AddMessage = () => {
  const [formData, setFormData] = useState({
    judul: "",
    penerbit: "",
    kategori: "",
    sarjana: "",
    tahun: "",
    abstrak: "",
  });
  const [user] = useAuthState(auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePublish = (e) => {
    if (
      !formData.judul ||
      !formData.penerbit ||
      !formData.kategori ||
      !formData.sarjana ||
      !formData.tahun ||
      !formData.abstrak
    ) {
      toast("Please fill all the fields");
      return;
    }

    const messageRef = collection(db, "georeference");
    addDoc(messageRef, {
      judul: formData.judul,
      penerbit: formData.penerbit,
      kategori: formData.kategori,
      sarjana: formData.sarjana,
      tahun: formData.tahun,
      abstrak: formData.abstrak,
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
          <div className="formtitle">Create</div>
          <div className="formadmin">
            <label htmlFor="">Judul</label>
            <input
              type="text"
              name="judul"
              className="formik"
              value={formData.judul}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="formadmin">
            <label htmlFor="">Penerbit</label>
            <input
              type="text"
              name="penerbit"
              className="formik"
              value={formData.penerbit}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="formadmin">
            <label htmlFor="">Kategori</label>
            <textarea
              name="kategori"
              className="formik"
              value={formData.kategori}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formadmin">
            <label htmlFor="">Sarjana s1/s2</label>
            <textarea
              name="sarjana"
              className="formik"
              value={formData.sarjana}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formadmin">
            <label htmlFor="">tahun</label>
            <textarea
              name="tahun"
              className="formik"
              value={formData.tahun}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formadmin">
            <label htmlFor="">abstrak</label>
            <textarea
              name="abstrak"
              className="formik"
              value={formData.abstrak}
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
