import React from "react";
import Header from "../../Components/HeaderPage";
import { Majalah } from "../../Components";
import { intel } from "../../assets";


const Locus = () => {
  const title = "LOCUS";
  const desc = "LOCUS merupakan majalah internal Ikatan Mahasiswa Geodesi ITB yang memberikan konten mengenai internalisasi anggota IMG-ITB, seperti kegiatan-kegiatan yang dilakukan oleh massa IMG-ITB. Majalah LOCUS diharapkan dapat menjadi wadah untuk meningkatkan keakraban serta mempererat kekeluargaan di IMG-ITB."

  return (
    <div>
      <Header title={title} desc={desc} background={intel} />
      <Majalah db="locus" title="LOCUS" />
    </div>
  );
};

export default Locus;
