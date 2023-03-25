import React from "react";
import useOpenController from "./useOpenController";
import "./Accordion.css";


export const Accordion = ({ section, key }) => {
    const { isOpen, toggle } = useOpenController(false);
    return (
        <div className="accordion-container" key={key}>
            <ExpendableColumn
                tanya={section.tanya}
                isOpen={isOpen}
                toggle={toggle}
            />
            {isOpen && <TextSection text={section.jawab} />}
        </div>
    );
};

export const ExpendableColumn = ({
    tanya, isOpen, toggle
}) => (
    <div className="column-container" onClick={toggle}>
        <div className="column-text">{tanya}</div>
        <button className="expendable-button">
            <span
                className="material-symbols-outlined"
                style={{
                    transform: `rotate(${isOpen ? 180 : 0}deg)`,
                    transition: "all 0.25s",
                }}
            >
            </span>
        </button>
    </div>
);

export const TextSection = ({ text }) => (
    <div className="text-container">
        <div>{text}</div>
    </div>
);

export default Accordion;