import { useEffect, useState } from "react";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../Config/firebase";

const useLoadData = (dbName, order) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dbCollection = collection(db, dbName);
    const q = query(dbCollection, orderBy(order));
    onSnapshot(q, (snapshot) => {
      const response = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(response);
    });
  }, []);

  return data
};

export default useLoadData