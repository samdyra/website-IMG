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
    Nama: "",
    image: "",
    kelompok: "",
    klmpkID: "",
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.Nama || !formData.image || !formData.kelompok) {
      toast("Please fill all the fields");
      return;
    }

    const storageRef = ref(storage, `/image/${formData.image.name}`);

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
          Nama: "",
          kelompok: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const kameradRef = collection(db, "kamerad");
          addDoc(kameradRef, {
            Nama: formData.Nama,
            image: url,
            kelompok: parseInt(formData.kelompok),
            klmpkID: `kelompok ${formData.kelompok}`,
          })
            .then(() => {
              toast("kamerad pun lahir", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding kamerad", { type: "error" });
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
          <dic className="formtitle">Create kamerad</dic>

          <div className="formadmin">
            <label htmlFor="">Nama</label>
            <textarea
              name="Nama"
              className="form-control"
              value={formData.Nama}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formadmin">
            <label htmlFor="">kelompok</label>
            <textarea
              name="kelompok"
              className="form-control"
              value={formData.kelompok}
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
