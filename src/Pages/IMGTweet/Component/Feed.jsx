// import { SparklesIcon } from "@heroicons/react/outline";
import {
  collection, onSnapshot, orderBy, query 
} from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import React,{ useEffect, useState } from "react";
import { db } from "../../../Config/firebase/index"
// import Input from "./Input";
import Post from "./Post";
import useLoadDataWithOffset from "../../../Helpers/useLoadDataWithOffset";
import "../IMGTweet.css"


export default function Feed() {
  const [ posts, setPosts ] = useState([]);
  const dataCurhat = useLoadDataWithOffset("CurhatanKamerad", 100, 1)

  useEffect(() => {
    setPosts(dataCurhat)
  }, [ dataCurhat ]);


  console.log(posts)
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-400  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl  ">
     
      {/* <Input /> */}

      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Post key={post.id} id={post.id} post={post} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
