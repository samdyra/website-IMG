// import Head from "next/head";
// import CommentModal from "../components/CommentModal";
import Feed from "./Component/Feed";
// import Widgets from "../components/Widgets";
import React from "react";
import "./IMGTweet.css"
import { intel } from "../../assets";

export default function IMGTweet() {
  return (
    <div className="tweet-wrapper">
      <main className=" tweet-background flex min-h-screen mx-auto  color-white " style={{ paddingTop: "20px" }}>
        
        {/* Sidebar */}

        {/* Feed */}

        <Feed />

        {/* Widgets */}

        {/* <Widgets
          newsResults={newsResults?.articles}
          randomUsersResults={randomUsersResults?.results || null}
        /> */}

        {/* Modal */}

        {/* <CommentModal /> */}
      </main>
    </div>
  );
}

