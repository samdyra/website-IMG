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
import UseCompressImage from "../../Helpers/useCompressImage";

export default function AddKamerad() {
  const [ user ] = useAuthState(auth);
  const [ formData, setFormData ] = useState({
    judul: "",
    desc: "",
    pdf: "",
    image: "",
  });

  const [ progress, setProgress ] = useState(0);
  const [ progressCompress, setProgressCompress ] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    UseCompressImage(e, formData, setFormData, setProgressCompress);
  };

  const handlePublish = () => {
    if (!formData.judul || !formData.pdf || !formData.desc || !formData.image ) {
      toast("Please fill all the fields");
      return;
    }

    const storageRef = ref(storage, `/locus/${formData.image.name}`);

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
          const kameradRef = collection(db, "locus");
          addDoc(kameradRef, {
            judul: formData.judul,
            image: url,
            pdf: formData.pdf,
            desc: formData.desc
          })
            .then(() => {
              toast("locus lahir", { type: "success" });
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
            <label htmlFor="">Judul Locus</label>
            <textarea
              name="judul"
              className="form-control"
              value={formData.judul}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formadmin">
            <label htmlFor="">link PDF locus</label>
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
          {progressCompress === 0 || progressCompress == 100 ? null : (
            <div className="progress">
              <div
                className="barloadingcompress"
                style={{ width: `${progressCompress}%` }}
              >
                {`compressing image ${progressCompress}%`}
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
