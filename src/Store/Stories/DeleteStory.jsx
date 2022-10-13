import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../../Config/firebase/index"
import { toast } from "react-toastify";

export default function DeleteStory({ id }) {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this Story?")) {
      try {
        await deleteDoc(doc(db, "story", id));
        toast("story deleted successfully", { type: "success" });
      } catch (error) {
        toast("Error deleting article", { type: "error" });
      }
    }
  };
  return (
    <div className="deleteButton">
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
