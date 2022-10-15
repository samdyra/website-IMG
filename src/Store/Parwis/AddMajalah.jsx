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
    desc: "",
    pdf: "",
    image: "",
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.judul || !formData.pdf || !formData.desc || !formData.image ) {
      toast("Please fill all the fields");
      return;
    }

    const storageRef = ref(storage, `/majalah/${formData.image.name}`);

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
          pdf: "",
          desc: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const kameradRef = collection(db, "majalah");
          addDoc(kameradRef, {
            judul: formData.judul,
            image: url,
            pdf: formData.pdf,
            desc: formData.desc
          })
            .then(() => {
              toast("majalah lahir", { type: "success" });
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
            <label htmlFor="">Judul Majalah</label>
            <textarea
              name="judul"
              className="form-control"
              value={formData.judul}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formadmin">
            <label htmlFor="">link PDF</label>
            <textarea
              name="pdf"
              className="form-control"
              value={formData.pdf}
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
