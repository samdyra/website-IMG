import React from "react";
import style from "./style.module.scss";
import { firebaseConfig } from "../../Config/firebase";
const HomeScreen = () => {
  const { container } = style;
  console.log(firebaseConfig);
  return <div className={container}>HomeScreen</div>;
};

export default HomeScreen;
