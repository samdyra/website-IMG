import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "../Config/firebase";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";

export default function UseDeleteDataWithImage({
  id, image, type="data", collection
}) {
  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      try {
        await deleteDoc(doc(db, collection, id));
        toast(`${type} deleted successfully`, { type: "success" });
        const storageRef = ref(storage, image);
        await deleteObject(storageRef);
      }
      catch (error) {
        toast(`Error deleting ${type}`, { type: "error" });
      }
    }
  };
  return (
    <div className="deleteButton">
      <button onClick={handleDelete}>{`delete ${type}`}</button>
    </div>
  );
}
