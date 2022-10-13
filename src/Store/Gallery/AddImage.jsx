import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../../Config/firebase/index";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

export default function AddImage() {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    name: "",
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
    if (!formData.name || !formData.image) {
      toast("Please fill all the fields");
      return;
    }

    const storageRef = ref(storage, `/gallery/${formData.image.name}`);

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          name: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const imageRef = collection(db, "gallery");
          addDoc(imageRef, {
            name: formData.name,
            image: url,
          })
            .then(() => {
              toast("image uploaded", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding image", { type: "error" });
            });
        });
      }
    );
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
          <div className="formtitle">Add Image</div>
          <div className="formadmin">
            <label htmlFor="">Nama</label>
            <input type="text" name="name" className="formol" value={formData.name} onChange={(e) => handleChange(e)} />
          </div>

          <div className="formadmin">
            <label htmlFor="">Image</label>
            <input type="file" name="image" accept="image/*" className="formik" onChange={(e) => handleImageChange(e)} />
          </div>

          {progress === 0 ? null : (
            <div className="progress">
              <div className="progress-bar progress-bar-striped mt-2" style={{ width: `${progress}%` }}>
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
