import React, { useState } from "react";
import style from "./style.module.scss";
import {
  ic_kognitif,
  ic_diskasi,
  ic_akademik,
  ic_dokumentasi,
  ic_eksternal,
  ic_gbhk,
  ic_keuangan,
  ic_perpustakaan,
  ic_software,
  ic_tutorial,
  intel
} from "../../assets";
import { Accordion } from "../../Components";
import useLoadDataWithOffset from "../../Helpers/useLoadDataWithOffset";
import { db } from "../../Config/firebase/index"
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import Gallery from "../../Components/Slider";
import kontur1 from "../../assets/images/kontur1.svg";



const Pojokimg = () => {
  const {
    containerSection,
    containerSection2,
    containerSection3,
    iconWrapper,
    iconContainer,
    menuWrapper,
    questionWrapper,
    curhatInputContainer,
    curhatHalfPage,
    curhatWrapper,
    formInput,
    formInput2,
    kontur1s,
    kontur2s,
    kontur3s,
    kontur4s,
    buttoncontainer
  } = style;

  const dataFAQ = useLoadDataWithOffset("FAQ", 10)
  const dataCurhat = useLoadDataWithOffset("CurhatanKamerad", 100)

  const menuGroup = [
    {
      icon: ic_dokumentasi,
      title: "dokumentasi",
      link: "https://drive.google.com/drive/folders/1SFAb_JXtdW5KxU5WJOGgbTEXKXtOaAN1"

    },
    {
      icon: ic_akademik,
      title: "akademik",
      link: "https://drive.google.com/drive/folders/1W05U2u8wWfnp3dHkKB2-iIqR9rgQaeB_"

    },
    {
      icon: ic_perpustakaan,
      title: "perpustakaan",
      link: "https://drive.google.com/drive/folders/1dXMnvRnOuNoR3sCqXuFp8H5rnfQB4xdb?usp=sharing",

    },
    {
      icon: ic_keuangan,
      title: "keuangan",
      link: "https://drive.google.com/drive/folders/1wzUuy0oBoyBioSRjO1GkISCvHvcNVeAR?usp=sharing",

    },
    {
      icon: ic_software,
      title: "software",
      link: "https://drive.google.com/drive/folders/192fPWkLwd5AOzrEOTfRQsbAeIOVd2KQm?usp=sharing",

    },
    {
      icon: ic_tutorial,
      title: "tutorial",
      link: "https://drive.google.com/drive/folders/0B7CqLaRyMRFifnBXdGw5SkM1blQtSEEwajRCN0hkWC15UVpJejkyVHZfRWcwR0tmUjVCTG8?resourcekey=0-qMovGxxZGhLzq5iv2FbJBw&usp=sharing"

    },
    {
      icon: ic_gbhk,
      title: "gbhk",
      link: "https://drive.google.com/drive/folders/1U2wGX5a3OQNP94Ho09XZz2WX4waqLpcp?usp=sharing"
      ,
    },
    {
      icon: ic_kognitif,
      title: "kognitif",
      link: "https://drive.google.com/drive/folders/1UnA57dWg9Tl55ZRp_5UsKpEzE-hbgJ-3?usp=sharing"

    },
    {
      icon: ic_diskasi,
      title: "diskusi",
      link: "https://drive.google.com/drive/folders/1gFis1bSFRhkj4dk8qVrHSraQzPhukvwT?usp=sharing"

    },
    {
      icon: ic_eksternal,
      title: "eksternal",
      link: "https://linktr.ee/kabareksternal"

    },



  ];

  const menuPojok = (menuGroup) => (
    <div className={menuWrapper}>
      <div className={iconWrapper}>
        {menuGroup?.map((item, index) => (
          <div key={index} className={iconContainer}
            onClick={() => window.open(item.link, "_blank")}>
            <img src={item.icon} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );

  const [ formData, setFormData ] = useState({
    nama: "",
    email: "",
    curhat: "",
    ditampilkan: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlePublish = () => {
    if (!formData.nama || !formData.curhat) {
      toast("Please fill all the fields");
      return;
    }

    const storyRef = collection(db, "CurhatanKamerad");
    addDoc(storyRef, {
      nama: formData.nama,
      curhat: formData.curhat,
      ditampilkan: formData.ditampilkan,
      terbitan: Date.now()
    })
      .then(() => {
        toast("added successfully", { type: "success" });
      })
      .catch(() => {
        toast("adding story", { type: "error" });
      });
  };
  const handleRadioChange = (event) => {
    const { checked } = event.target;
    const newValue = checked ? 1 : 0;
    setFormData((prevFormData) => ({
      ...prevFormData,
      ditampilkan: newValue,
    }));
  };

  const dataCurhatTampil = dataCurhat
  const minHeight = dataFAQ && dataFAQ?.length * 16;

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <img src={kontur1} alt="kontur1" className={kontur1s} />
      <img src={kontur1} alt="kontur2" className={kontur2s} />
      <img src={kontur1} alt="kontur3" className={kontur3s} />
      <img src={kontur1} alt="kontur4" className={kontur4s} />


      <div className={containerSection}>
        <div>
          <h1>Arsip Kamerad</h1>
        </div>
        <div>
          <div>
            <h2>Khusus buat kamu loh, rads!</h2>
          </div>
          {menuPojok(menuGroup)}
        </div>
      </div>

      <div className={containerSection2}>
        <div>
          <h1>Get to Know Geodesy</h1>
        </div>
        <div>
          <h2>FAQ</h2>
        </div>
        <div className={questionWrapper} style={{ minHeight: `${minHeight}vh` }}>
          {dataFAQ?.map((section, index) => (
            <Accordion key={index} section={section} />
          ))}
        </div>
      </div>

      <div className={containerSection3} style={{ backgroundImage: `url(${intel})` }}>
        <div className={curhatHalfPage}>
          <h1>Curhatan <br /> Kamerad</h1>
          <h2>Mau confess? Mau cerita? Disini aman kok! </h2>
          <div className={curhatWrapper}>
            <Gallery sliderName="curhatan" data={dataCurhatTampil} />
          </div>
        </div>

        <div className={curhatInputContainer} >
          <div className={formInput}>
            <label htmlFor="">nama</label>
            <input
              type="text"
              name="nama"
              className="formik"
              value={formData.nama}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={formInput}>
            <label htmlFor="">Alamat Email</label>
            <input
              type="text"
              name="email"
              className="formik"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
          </div>


          <div className={formInput}>
            <label htmlFor="">Curhat-an Kamerad</label>
            <textarea
              name="curhat"
              className="formik"
              value={formData.curhat}
              onChange={(e) => handleChange(e)}
              rows="13"
            />
          </div>
          <div className={buttoncontainer}>
            <div className={formInput2}>
            
              <label className="switch">
                <input type="checkbox" onChange={handleRadioChange} />
                <span className="slider"></span>
              </label>
            </div>

            <div className={formInput}>
              <div className="button" onClick={handlePublish}>
                <div className="box">S</div>
                <div className="box">U</div>
                <div className="box">B</div>
                <div className="box">M</div>
                <div className="box">I</div>
                <div className="box">T</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
};

export default Pojokimg;
