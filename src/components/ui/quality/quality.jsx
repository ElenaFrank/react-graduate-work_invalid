import React from "react"
import PropType from "prop-types"

const Quality = (props) => {
    return (
        <span key={props._id} className={"badge m-1 bg-" + props.color}>
            {props.name}
        </span>
    )
}
Quality.propTypes = {
    _id: PropType.string.isRequired,
    color: PropType.string.isRequired,
    name: PropType.string.isRequired,
}

export default Quality
