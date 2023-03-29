import { useEffect, useState } from "react";
import {
  query, collection, onSnapshot, limit 
} from "firebase/firestore";
import { db } from "../Config/firebase";

const useLoadDataWithOffset = (dbName, limitData = 5, page = 1,) => {
  const [ data, setData ] = useState([]);
  const shownData = page * limitData;

  useEffect(() => {
    const dbCollection = collection(db, dbName);
    const q = query(dbCollection, limit(shownData));

    onSnapshot(q, (snapshot) => {
      const response = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(response);
    });
  }, [ page ]);

  return data;
};

export default useLoadDataWithOffset;
