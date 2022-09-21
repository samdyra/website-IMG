import React from "react";
import style from "./style.module.scss";

const Activities = (props) => {
    const {
    container, 
    containerSection,
    box1,
    box2
    } = style;

    const pageName = props.pageName;

    return(
        <>
            { pageName == 'internalevent' ?
            (
                <div className={container}>
                    <div className={containerSection}>
                        <div>
                            <h1>Internal Events in IMG-ITB</h1>
                        </div>
                        <div>
                            <div className={box1}>
                                asdasdasd
                            </div>
                            <div className={box2}>

                            </div>
                        </div>
                        <div>
                            <h1>Our Internal Event Dates</h1>
                            <button>click here</button>
                        </div>
                    </div>

                    <div className={containerSection}>

                    </div>

                    <div className={containerSection}>

                    </div>
                </div>
            ) 
            :pageName == 'paradewisuda' ? 
            (
                <div>

                    <div className={containerSection}>
                        <div>
                            <h1>Parade Wisuda</h1>
                            <h1>IMG-ITB</h1>
                        </div>
                        <div>
                        <p>blablabalbablabalbal</p>
                        </div>
                    </div>


                    
                    
                </div>
            ):pageName == "studentchapter" ?
            (
                <div>
                    <div className={containerSection}>
                        <h1>Studen Chapter</h1>
                    </div>
                </div>
            ):pageName == "kabarkesenatoran" ?
            (
                <div>
                    <div className={containerSection}>
                        <h1>Kabar Kesenatoran</h1>
                    </div>
                </div>
            ):null

            }
        </>
    );
};

export default Activities;