import React from "react";
import { Header } from "../../Components";
import {
  imgx, calendar, book 
} from "../../assets";
import useLoadData from "../../Helpers/useLoadData";


const Georeference = () => {
  const title = "GEOREFERENCE";
  const desc = "Georeference memiliki tujuan untuk mendokumentasikan dan mengarsipkan artikel ilmiah dari anggota IMG-ITB sebagai ajang diseminasi ilmu pengetahuan seputar implementasi keilmuan Teknik Geodesi dan Geomatika dalam bentuk penelitian."
  const data = useLoadData("georeference")
  console.log(data)
  return (
    <>
      <Header title={title} desc={desc} background={imgx} />
      <div className="h-full w-full justify-center mt-10 flex flex-col items-center font-jakarta mb-20">
        <h1 className="font-jakarta font-semibold text-[30px] mb-8 ">Publikasi Georeference</h1>
        {data && data?.map((el) => (
          <div className="px-5 mb-8 w-full md:w-[720px]">
            <h2 className="font-semibold mb-1 text-justify leading-5 md:text-[20px] md:leading-6">{el?.judul}</h2>
            <div className="flex flex-col text-[12px] gap-1">
              <div className="flex justify-between">
                <p className="text-gray-500 w-36 truncate hover:text-clip md:text-[15px]">{el?.penerbit}</p>
                {el?.link && (
                  <div className="flex gap-1">
                    <img src={book} className="h-3 w-3"/>
                    <div onClick={() =>
                      window.open(el?.link, "_blank")
                    }>
                      <p className="text-blue-400 md:text-[15px] cursor-pointer">{el?.kategori}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <p className="text-gray-500 md:text-[15px]">{el?.tahun}</p>
                  <img src={calendar} className="h-3 w-3"/>
                </div>
                <p className="text-yellow-600 md:text-[15px]">• {el?.sarjana} Jurnal</p>
              </div>
            </div>
          </div>
        ))}
       
        
      </div>
    </>

  )
}

export default Georeference;
