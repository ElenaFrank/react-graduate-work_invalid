import React from "react";

const Qualitie = (props) => {
    // return qualities.map(quality => {
        return (
            <span
                key={props.id}
                // className={getBadgeClasses(props.color)}
            >
                {props.name}
            </span>
        )
    // })
}

export default Qualitie