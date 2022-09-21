import React from "react";
import style from "./style.module.scss";

const Pojokimg = () => {
const {
    containerSection,

} = style;

    return(
        <div>

            <div className={containerSection}>
                <div>
                    <h1>Arsip Kamerad</h1>
                </div>
                <div>
                    <div>
                        <h2>Khusus buat Kamerad :</h2>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className={containerSection}>
                <div>
                    <h1>Get to Know</h1>
                    <h1>Geodesy</h1>
                </div>
                <div>
                    <div>
                        <h2>FAQ</h2>
                    </div>
                    <div>
                        <h3>bla bla bal bla bla</h3>
                        <h3>bla bla bal bla bla</h3>
                        <h3>bla bla bal bla bla</h3>
                    </div>
                </div>
            </div>

            <div className={containerSection}>
                <div>
                    <h1>Curhatan Kamerad</h1>
                </div>
                <div>
                    <div>
                       grid gambar
                    </div>
                    <div>
                        user info?
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Pojokimg;
