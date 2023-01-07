import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "../Config/firebase";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";

const UseDeleteDataWithImage = ({
  id, image, type
}) => {
  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      try {
        await deleteDoc(doc(db, type, id))
        toast(`${type} deleted successfully`, { type: "success" })
        const storageRef = ref(storage, image);
        console.log("storageRef", storageRef)
        await deleteObject(storageRef);
      }
      catch (error) {
        toast(`Error deleting ${type}`, { type: "error" });
        console.log("erroe", error)
      }
    }
  };
  return (
    <div className="deleteButton">
      <button onClick={handleDelete}>{`delete ${type}`}</button>
    </div>
  );
}

export default UseDeleteDataWithImage;