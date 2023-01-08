import React from "react";
import style from "./style.module.scss";
import Header from "../../Components/HeaderPage";
import Gallery from "../../Components/Slider";
import DoubleSlider from "../../Components/DoubleSlider";
import { isMobile } from "../../Helpers/mobileResponsive";
import background from "../../assets/images/backgroundwisuda.png";

const paradeWisuda = () => {
  const { containerSection } = style;
  const title = "Parade Wisuda IMG-ITB";
  const desc = "Parade Wisuda IMG-ITB merupakan rangkaian acara untuk mengapresiasi kelulusan wisudawan dan wisudawati IMG-ITB yang telah berkontribusi bagi himpunan, almamater, hingga akhirnya berhasil memperoleh gelar sarjananya. Rangkaian kegiatan parade dimulai dari mengarak wisudawan dan wisudawati hingga adanya performance dari massa IMG-ITB. Parade Wisuda IMG-ITB diadakan tiga kali setiap tahunnya, yaitu pada bulan April, Juli, dan Oktober."
  return (
    <div>
      <Header title={title} desc={desc} background={background}/>
      <div style={{ marginTop: "100px" }}>
        <DoubleSlider sliderName="paradewisuda" />
      </div>

      <div className={containerSection}>
        <h1>Dokumentasi Parade Wisuda IMG-ITB</h1>
        <Gallery sliderName={isMobile ? "modalimg" : "gallery"} />
      </div>
    </div>
  );
};

export default paradeWisuda;
