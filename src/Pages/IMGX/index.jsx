import React, { useState, useEffect } from "react";
import Header from "../../Components/HeaderPage";
import { intel } from "../../assets";
import s from "./style.module.scss"
import useLoadData from "../../Helpers/useLoadData";
import { isMobile } from "../../Helpers/mobileResponsive";


const IMGX = () => {
  const title = "IMG X";
  const desc = "IMGx menjadi jembatan antara pihak luar yang ingin berkolaborasi dengan IMG-ITB dalam bidang keilmuan dan keprofesian untuk menghasilkan suatu karya yang dapat menjawab permasalahan yang ada dengan kolaborasi keilmuan masing-masing lembaga."
  const data = useLoadData("imgx", 10);

  useEffect(() => {
    setMainCard(data[0])
  }, [ data ])
  
  const [ mainCard, setMainCard ] = useState({
    image: "",
    tanggal: "",
    judul: "",
    desc:"",
  })

  const handleClickCard = (param) => {
    setMainCard(param)
  }

  return (
    <div className={s.container}>
      <Header title={title} desc={desc} background={intel} />
      <div className={s.containerIMGX}>
        <div className={s.main}>
          <img src={mainCard.image}></img>
          <h2>{mainCard.tanggal}</h2>
          <h1>{mainCard.judul}</h1>
          <div><span className={s.span}>{`${mainCard.judul}`}</span>{` - ${mainCard.desc}`}</div>
        </div>
        {isMobile && <h5 style={{ fontSize: 20, marginBottom: 10 }}>Read More</h5>}
        <div className={s.carousel}>
          {data && data.map((el) => (
            <div className={s.card} onClick={() => handleClickCard(el)}>
              <div className={s.descCard}>
                <h1>{el.tanggal}</h1>
                <h2>{el.judul}</h2>
                <p><span className={s.span}>{`${el.judul}`}</span>{` - ${el.desc}`}</p>
              </div>
              <img src={el?.image}></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IMGX;
