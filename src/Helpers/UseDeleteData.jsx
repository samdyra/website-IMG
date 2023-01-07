import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../Config/firebase";
import { toast } from "react-toastify";

export default function UseDeleteData({ id, type }) {
  const UseDeleteData = async () => {
    if (window.confirm(`Are you sure you want to delete ${type} ?`)) {
      try {
        await deleteDoc(doc(db, type, id));
        toast(`${type} deleted successfully`, { type: "success" });
      }
      catch (error) {
        toast(`Error deleting ${type}`, { type: "error" });
      }
    }
  };
  return (
    <div className="deleteButton">
      <button onClick={UseDeleteData}>Delete</button>
    </div>
  );
}
