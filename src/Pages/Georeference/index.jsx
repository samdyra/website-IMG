import React from "react";
import { Header } from "../../Components";
import { imgx } from "../../assets";


const Georeference = () => {
  const title = "GEOREFERENCE";
  const desc = "Georeference memiliki tujuan untuk mendokumentasikan dan mengarsipkan artikel ilmiah dari anggota IMG-ITB sebagai ajang diseminasi ilmu pengetahuan seputar implementasi keilmuan Teknik Geodesi dan Geomatika dalam bentuk penelitian."
  return (
    <Header title={title} desc={desc} background={imgx} />

  )
}

export default Georeference;
