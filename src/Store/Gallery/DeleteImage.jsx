import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "../../Config/firebase/index";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";

export default function DeleteImage({ id, image }) {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      try {
        await deleteDoc(doc(db, "gallery", id));
        toast("image deleted successfully", { type: "success" });
        const storageRef = ref(storage, image);
        await deleteObject(storageRef);
      } catch (error) {
        toast("Error deleting image", { type: "error" });
      }
    }
  };
  return (
    <div className="deleteButton">
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
