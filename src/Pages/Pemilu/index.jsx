import React, { useState, useEffect } from "react";
import s from "./style.module.scss";
import { isMobile } from "../../Helpers/mobileResponsive";
import LogoPansusFix from "../../assets/images/LogoPansusFix.png";
import ProgressBar from "./ProgressBar";
import videoplayback from "../../assets/video/videoplayback.webm";
import { Adam_Caketum1, Venta_Caketum2 } from "../../assets";
import { Modal } from "../../Components";

const Pemilu = () => {
  const { buttonDokumen } = s;
  const [ openModalAdam, setOpenModalAdam ] = useState(false);
  const [ openModalVenta, setOpenModalVenta ] = useState(false);

  useEffect(() => {
    openModalAdam
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [ openModalAdam ]);

  useEffect(() => {
    openModalVenta
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [ openModalVenta ]);

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.backgroundTop}>
          <video autoPlay playsInline muted loop src={videoplayback} />
          <div className={s.backgroundTop2}></div>
        </div>

        <div className={s.containerTop}>
          <img src={LogoPansusFix} alt="" />
          {isMobile ? (
            <h1>
              Panitia Khusus <br /> Pemilu IMG-ITB 2023
            </h1>
          ) : (
            <h1>Panitia Khusus Pemilu IMG-ITB 2023</h1>
          )}

          <h2>
            Pemilu IMG-ITB 2023 merupakan rangkaian acara pesta demokrasi untuk
            regenerasi Ketua Umum IMG-ITB.
          </h2>
          <button
            className={buttonDokumen}
            onClick={() =>
              window.open("https://linktr.ee/PemiluIMG2023", "_blank")
            }
          >
            Dokumen Pemilu IMG-ITB 2023
          </button>
        </div>
        <ProgressBar />

        <div className={s.container}>
          <h1 style={{ marginBlock: "100px" }}>who’s the next pirate king?</h1>
          <div className={s.section}>
            {isMobile && (
              <div className={s.caketum_container}>
                <div className={s.no_caketum}>1</div>
                <img src={Adam_Caketum1} alt="" />
              </div>
            )}
            <div>
              <div className={s.text_container} style={{ marginBottom: "15px" }}>
                <h1>Nama : Zachary Adam hidayat</h1>
                <h1>NIM : 15120005</h1>
              </div>
              <div className={s.text_container} style={{ height: "376px" }}>
                <h1>VISI</h1>
                <p>
                  IMG-ITB sebagai suar dan ruang pengembangan anggotanya dalam
                  rangka mewujudkan pembelajar abadi yang memiliki orientasi
                  kebermanfaatan
                </p>
              </div>
            </div>
            {!isMobile && (
              <div className={s.caketum_container}>
                <div className={s.no_caketum}>1</div>
                <img src={Adam_Caketum1} alt="" />
              </div>
            )}

            <div
              className={s.text_container}
              style={{
                height: "500px",
                fontSize: "13px",
                lineHeight: "14px",
              }}
            >
              <h1>MISI</h1>
              <p style={{ marginBottom: "20px" }}>
                1.Mengusahakan pengembangan dan pemerataan keterampilan Anggota
                IMG-ITB dalam keprofesian Teknik Geodesi dan Geomatika berdasarkan
                Tujuan Pendidikan dan Capaian Lulusan Program Studi Teknik Geodesi
                dan Geomatika ITB serta Draft RUK IMG-ITB. <br /> 2.Menyediakan
                wadah pengembangan kepribadian yang dimanfaatkan oleh Anggota
                IMG-ITB untuk mendidik diri dalam rangka menciptakan anggota
                IMG-ITB yang mencerminkan nilai-nilai IMG-ITB dalam pribadinya.
              </p>
              <button
                className={buttonDokumen}
                onClick={() => setOpenModalAdam(true)}
                style={{ margin: "0 auto" }}
              >
                Read More
              </button>
            </div>
          </div>
          <Modal
            ModalName="pemilu"
            open={openModalAdam}
            onClose={() => setOpenModalAdam(false)}
          >
            <h1>Misi</h1>
            <p>
              1. Mengusahakan pengembangan dan pemerataan keterampilan Anggota
              IMG-ITB dalam keprofesian Teknik Geodesi dan Geomatika berdasarkan
              Tujuan Pendidikan dan Capaian Lulusan Program Studi Teknik Geodesi
              dan Geomatika ITB serta Draft RUK IMG-ITB.
              <br /> 2. Menyediakan wadah pengembangan kepribadian yang
              dimanfaatkan oleh Anggota IMG-ITB untuk mendidik diri dalam rangka
              menciptakan anggota IMG-ITB yang mencerminkan nilai-nilai IMG-ITB
              dalam pribadinya. <br />
              3. Menciptakan kesejahteraan anggota melalui usaha-usaha pemenuhan
              kebutuhan, penyelesaian masalah, dan pensuasanaan lingkungan yang
              bersifat kekeluargaan.
              <br /> 4. Menjalankan hubungan kerja sama dengan lembaga-lembaga
              kemahasiswaan di ITB atau lembaga-lembaga lainnya dalam rangka
              pencapaian visi serta memelihara hubungan kekeluargaan dengan Alumni
              IMG-ITB
              <br /> 5. Mengusahakan optimasi komunikasi dalam rangka meningkatkan
              ketersampaian informasi kepada Anggota IMG-ITB.
              <br /> 6. Mengoptimumkan fungsi dan peran sumber daya finansial,
              material, dan informasi untuk menunjang pelaksanaan program
              kepengurusan serta peningkatan kualitas dan kuantitas sumber daya.
              <br /> 7. Menyediakan wadah penyaluran kebermanfaatan Anggota
              IMG-ITB sebagai luaran dari pengembangan diri Anggota IMG-ITB
            </p>
          </Modal>
          <Modal
            ModalName="pemilu"
            open={openModalVenta}
            onClose={() => setOpenModalVenta(false)}
          >
            <h1>Misi</h1>
            <p>
              1. Membentuk suatu sistem organisasi yang efektif dan efisien serta
              terintegrasi. <br /> 2. Menciptakan sistem alur informasi yang
              efektif dan atraktif. <br /> 3. Meningkatkan hubungan baik dengan
              pihak luar IMG-ITB dengan memperhatikan sumber daya dan kebutuhan
              anggota IMG-ITB. <br /> 4. Meningkatkan wadah pengembangan
              keprofesian guna menambah wawasan anggota IMG-ITB serta
              mengimplementasikan keilmuan Teknik Geodesi dan Geomatika. <br /> 5.
              Meningkatkan pengembangan kepribadian anggota IMG-ITB secara
              progresif menyesuaikan dengan minat anggota IMG-ITB. <br /> 6.
              Memenuhi kebutuhan terkait kesejahteraan anggota IMG-ITB. <br /> 7.
              Memfasilitasi anggota IMG-ITB untuk berperan dalam kegiatan
              kemasyarakatan dengan memanfaatkan keilmuan Teknik Geodesi dan
              Geomatika.
            </p>
          </Modal>
          {/* <div className={s.vote_button}>VOTE YOUR PIRATE KING NOW!</div> */}
        </div>
        <div className={s.container}>
          <div className={s.section}>
            {isMobile && (
              <div className={s.caketum_container}>
                <div className={s.no_caketum}>2</div>
                <img src={Venta_Caketum2} alt="" />
              </div>
            )}
            <div>
              <div className={s.text_container} style={{ marginBottom: "15px" }}>
                <h1>Nama : Michael Aventa</h1>
                <h1>NIM : 15120067</h1>
              </div>
              <div className={s.text_container} style={{ height: "376px" }}>
                <h1>VISI</h1>
                <p>
                  IMG-ITB dengan segala sumber dayanya berkembang secara adaptif
                  terhadap perkembangan zaman serta dapat berkreasi sesuai minat
                  dan kebutuhannya
                </p>
              </div>
            </div>
            {!isMobile && (
              <div className={s.caketum_container}>
                <div className={s.no_caketum}>2</div>
                <img src={Venta_Caketum2} alt="" />
              </div>
            )}

            <div className={s.text_container} style={{ height: "500px" }}>
              <h1>MISI</h1>
              <p style={{ marginBottom: "20px" }}>
                1. Membentuk suatu sistem organisasi yang efektif dan efisien
                serta terintegrasi. <br /> 2. Menciptakan sistem alur informasi
                yang efektif dan atraktif. <br /> 3. Meningkatkan hubungan baik
                dengan pihak luar IMG-ITB dengan memperhatikan sumber daya dan
                kebutuhan anggota IMG-ITB. <br /> 4. Meningkatkan wadah
                pengembangan keprofesian guna menambah wawasan anggota IMG-ITB
                serta mengimplementasikan keilmuan Teknik Geodesi dan Geomatika.{" "}
              </p>
              <button
                className={buttonDokumen}
                onClick={() => setOpenModalVenta(true)}
                style={{ margin: "0 auto" }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between w-screen items-center">
        <div className="border-solid border-2 w-1/5 h-0 border-[#800000] sm:w-1/3"/>
        <h3 className="text-4xl font-BlackHarbour sm:text-6xl ">VOTE YOUR PIRATE KING</h3>
        <div className="border-solid border-2 w-1/5 h-0 border-[#800000] sm:w-1/3"/>
      </div>

      <div className="flex flex-row justify-center" onClick={() => window.open("https://forms.gle/CACUWHGwUrUKQvLAA")}>
        <div/>
        <div className="text-3xl font-BlackHarbour border border-solid py-1 px-8 rounded-lg bg-[#800000] border-[#800000] text-white mt-5 mb-10 md:text-6xl md:px-12 shadow-2xl shadow-black cursor-pointer">VOTE</div>
        <div />
      </div>
    </>
  );
};

export default Pemilu;
