import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../Config/firebase";
import { toast } from "react-toastify";

export default function UseDeleteData({
  id, type="data", collection 
}) {
  const UseDeleteData = async () => {
    if (window.confirm(`Are you sure you want to delete ${type} ?`)) {
      try {
        await deleteDoc(doc(db, collection, id));
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
