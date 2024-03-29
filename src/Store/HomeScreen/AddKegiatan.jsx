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
    image: "",
    date: "3 Agustus 2022",
    redaksi: "",
    terbitan: 0
  });

  const [ progressCompress, setProgressCompress ] = useState(0);

  const [ progress, setProgress ] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    UseCompressImage(e, formData, setFormData, setProgressCompress);
  };

  const handlePublish = () => {
    if (!formData.judul || !formData.image || !formData.date) {
      toast("Please fill all the fields");
      return;
    }

    const storageRef = ref(storage, `/kegiatan/${formData.image.name}`);

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
          redaksi: "",
          terbitan: 0
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const kameradRef = collection(db, "kegiatan");
          addDoc(kameradRef, {
            judul: formData.judul,
            image: url,
            date: formData.date,
            redaksi: formData.redaksi,
            terbitan: formData.terbitan
          })
            .then(() => {
              toast("keigatan lahir", { type: "success" });
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
          <div className="formtitle">Create</div>

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
            <label htmlFor="">redaksi</label>
            <textarea
              name="redaksi"
              className="form-control"
              value={formData.redaksi}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formadmin">
            <label htmlFor="">terbitan</label>
            <textarea
              name="terbitan"
              className="form-control"
              value={formData.terbitan}
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
