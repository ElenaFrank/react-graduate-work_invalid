import React from "react"
import Quality from "./quality"
import PropType from "prop-types"

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((quality) => {
                return <Quality key={quality._id} {...quality}></Quality>
            })}
        </>
    )
}
QualitiesList.propTypes = {
    qualities: PropType.array.isRequired
}
export default QualitiesList
