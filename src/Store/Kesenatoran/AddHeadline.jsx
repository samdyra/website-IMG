import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../Config/firebase/index"
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const AddCurhat = () => {
  const [formData, setFormData] = useState({
    headline: "",
  });
  const [user] = useAuthState(auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePublish = (e) => {
    if (!formData.headline) {
      toast("Please fill all the fields");
      return;
    }

    const storyRef = collection(db, "headlineKesenatoran");
    addDoc(storyRef, {
      headline: formData.headline,
    })
      .then(() => {
        toast("added successfully", { type: "success" });
      })
      .catch((err) => {
        toast("adding story", { type: "error" });
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
          <div className="formtitle">Form</div>
          <div className="formadmin">
            <label htmlFor="">Headline</label>
            <input
              type="text"
              name="headline"
              className="formik"
              value={formData.headline}
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

export default AddCurhat;
