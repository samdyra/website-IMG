import React from "react";
import Header from "../../Components/HeaderPage";
import { intel } from "../../assets";


const IMGX = () => {
  const title = "IMG X";
  const desc = "IMGx menjadi jembatan antara pihak luar yang ingin berkolaborasi dengan IMG-ITB dalam bidang keilmuan dan keprofesian untuk menghasilkan suatu karya yang dapat menjawab permasalahan yang ada dengan kolaborasi keilmuan masing-masing lembaga."
  return (
    <div>
      <Header title={title} desc={desc} background={intel} />
    </div>
  );
};

export default IMGX;
