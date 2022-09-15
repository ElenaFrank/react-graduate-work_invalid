import React from "react";

const Status = (props) => {

    const renderParse = () => {
        
        let altCount = props.length
        altCount = altCount>100 ? altCount%100 : altCount
        altCount = (20<altCount && altCount<100) ? altCount%10 : altCount
        
        return altCount >=2
        && altCount<=4 ? " человека тусанут" : " человек тусанет"
    }

    return (
        <h3>
        <span
            className={props.length !==0
                ? "badge m-1 bg-primary"
                : "badge m-1 bg-danger"}
        >
            {props.length !==0
            ? `${props.length} ${renderParse()} с тобой сегодня`
                : "Никто с тобой не тусонет"}
        </span>
        </h3>
    )
}

export default Status