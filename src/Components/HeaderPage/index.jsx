import React from "react";
import style from "./style.module.scss";

const Header = () => {
  const { container, content } = style;
  return (
    <div className={container}>
      <div className={content}>
        <h1>Ikatan Mahasiswa Geodesi</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Voluptatem enim vero exercitationem animi sequi possimus expedita placeat vel 
          incidunt maiores nulla blanditiis eum fugit molestias facere aperiam, r
          epellat porro quaerat eius illum, saepe fuga voluptates numquam quos. Laboriosam maxime,
          praesentium, natus commodi eaque veritatis perspiciatis error nulla ducimus aperiam laborum?
        </p>
      </div>
    </div>
  );
};

export default Header;
