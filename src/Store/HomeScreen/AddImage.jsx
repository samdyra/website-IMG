import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {
  ref, uploadBytesResumable, getDownloadURL 
} from "firebase/storage";
import {
  storage, db, auth 
} from "../../Config/firebase/index";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

export default function AddImage() {
  const [ user ] = useAuthState(auth),
    [ formData, setFormData ] = useState({ image: "" }),

    [ progress, setProgress ] = useState(0),

    handleImageChange = (e) => {
      setFormData({ ...formData, image: e.target.files[0] });
    },

    handlePublish = () => {

      const storageRef = ref(storage, `/home/image/${formData.image.name}`),

        uploadImage = uploadBytesResumable(storageRef, formData.image);

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
          setFormData({ image: "", });

          getDownloadURL(uploadImage.snapshot.ref).then((url) => {
            const kameradRef = collection(db, "fotoHome");
            addDoc(kameradRef, { image: url, })
              .then(() => {
                toast("foto lahir", { type: "success" });
                setProgress(0);
              })
              .catch(() => {
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
