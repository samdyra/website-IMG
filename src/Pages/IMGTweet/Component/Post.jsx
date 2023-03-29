import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import Moment from "react-moment";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
// import { db, storage } from "../../firebase";

import React,{ useState, useEffect } from "react";
import { deleteObject, ref } from "firebase/storage";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atom/modalAtom";
import { userState } from "../atom/userAtom";

export default function Post({ post, id }) {
  const [ likes, setLikes ] = useState([]);
  const [ comments, setComments ] = useState([]);
  const [ hasLiked, setHasLiked ] = useState(false);
  const [ open, setOpen ] = useRecoilState(modalState);
  const [ postId, setPostId ] = useRecoilState(postIdState);
  const [ currentUser ] = useRecoilState(userState);

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     collection(db, "posts", id, "likes"),
  //     (snapshot) => setLikes(snapshot.docs)
  //   );
  // }, [ db ]);

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     collection(db, "posts", id, "comments"),
  //     (snapshot) => setComments(snapshot.docs)
  //   );
  // }, [ db ]);

  useEffect(() => {
    setHasLiked(likes.findIndex((like) => like.id === currentUser?.uid) !== -1);
  }, [ likes, currentUser ]);

  async function likePost() {
    // if (currentUser) {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", currentUser?.uid));
    }
    else {
      await setDoc(doc(db, "posts", id, "likes", currentUser?.uid), { username: currentUser?.username, });
    }
    // }
    // // else {
    // //   // signIn();
    // //   router.push("/auth/signin");
    // // }
  }

  async function deletePost() {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deleteDoc(doc(db, "posts", id));
      if (post.data().image) {
        deleteObject(ref(storage, `posts/${id}/image`));
      }
      router.push("/");
    }
  }


  return (
    <div className="flex p-3 cursor-pointer border-b  feed-wrapper">
      {/* user image */}
      {/* <img
        className="h-11 w-11 rounded-full mr-4"
        src={post?.userImg}
        alt="user-img"
      /> */}
      {/* right side */}
      <div className="flex-1">
        {/* Header */}

        <div className="flex items-center justify-between">
          {/* post user info */}
          <div className="flex items-center   space-x-2 whitespace-nowrap border-t-gray-800">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              @{post?.nama} -
            </h4>
            
            <span className="text-sm sm:text-[15px] hover:underline">
              <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
            </span>
          </div>

          {/* dot icon */}
          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-cyan-900 hover:text-sky-500 p-2 rounded-full " />
        </div>

        {/* post text */}

        <p
          onClick={() => router.push(`/posts/${id}`)}
          className=" text-[15px sm:text-[16px] mb-2"
        >
          {post?.curhat}
        </p>

        {/* post image */}

        <img
          onClick={() => router.push(`/posts/${id}`)}
          className="rounded-2xl mr-2"
          src={post?.image}
          alt=""
        />

        {/* icons */}

        <div className="flex justify-between text-gray-500 p-2">
          <div className="flex items-center select-none">
            <ChatIcon
              onClick={() => {
                if (!currentUser) {
                  // signIn();
                  // router.push("/auth/signin");
                }
                else {
                  setPostId(id);
                  setOpen(!open);
                }
              }}
              className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-cyan-900 rounded-full"
            />
            {comments.length > 0 && (
              <span className="text-sm">{comments.length}</span>
            )}
          </div>
          {currentUser?.uid === post?.id && (
            <TrashIcon
              onClick={deletePost}
              className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
            />
          )}
          <div className="flex items-center">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="h-9 w-9 hoverEffect p-2 text-red-600 hover:bg-red-100"
              />
            ) : (
              <HeartIcon
                onClick={likePost}
                className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover-heart"
              />
            )}
            {likes.length > 0 && (
              <span
                className={`${hasLiked && "text-red-600"} text-sm select-none`}
              >
                {" "}
                {likes.length}
              </span>
            )}
          </div>

          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-cyan-900 rounded-full" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-cyan-900 rounded-full" />
        </div>
      </div>
    </div>
  );
}
