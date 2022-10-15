import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../../Config/firebase/index";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

export default function AddKamerad() {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    judul: "",
    image: "",
    date: "3 Agustus 2022",
    desc: "",
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.judul || !formData.image || !formData.date || !formData.desc) {
      toast("Please fill all the fields");
      return;
    }

    const storageRef = ref(storage, `/isuKampus/${formData.image.name}`);

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          judul: "",
          image: "",
          date: "",
          desc: ""
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const kameradRef = collection(db, "isuKampus");
          addDoc(kameradRef, {
            judul: formData.judul,
            image: url,
            date: formData.date,
            desc: formData.desc,
          })
            .then(() => {
              toast("keigatan lahir", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error", { type: "error" });
            });
        });
      }
    );
  };

  return (
    <div>
      {!user ? (
        <>
          <h2>
            <Link to="/login">Login to create article</Link>
          </h2>
        </>
      ) : (
        <div className="formadmincontainer">
          <dic className="formtitle">Create</dic>

          <div className="formadmin">
            <label htmlFor="">Judul</label>
            <textarea
              name="judul"
              className="form-control"
              value={formData.judul}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formadmin">
            <label htmlFor="">Date</label>
            <textarea
              name="date"
              className="form-control"
              value={formData.date}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formadmin">
            <label htmlFor="">desc</label>
            <textarea
              name="desc"
              className="form-control"
              value={formData.desc}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formadmin">
            <label htmlFor="">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="form-control"
              onChange={(e) => handleImageChange(e)}
            />
          </div>
          {progress === 0 ? null : (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}%` }}
              >
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}
          <button className="formbutton" onClick={handlePublish}>
            Publish
          </button>
        </div>
      )}
    </div>
  );
}
