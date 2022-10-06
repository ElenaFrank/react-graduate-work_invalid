import React from "react"
import PropType from "prop-types"

const Status = ({ length }) => {
    const renderParse = () => {
        let altCount = length
        altCount = 100 < altCount ? altCount % 100 : altCount
        altCount = 20 < altCount && 100 > altCount ? altCount % 10 : altCount

        return 2 <= altCount && 4 >= altCount
            ? " человека тусанут"
            : " человек тусанет"
    }

    return (
        <h3>
            <span
                className={
                    0 !== length ? "badge m-1 bg-primary" : "badge m-1 bg-danger"
                }
            >
                {0 !== length
                    ? `${length} ${renderParse()} с тобой сегодня`
                    : "Никто с тобой не тусонет"}
            </span>
        </h3>
    )
}

Status.propTypes = {
    length: PropType.number.isRequired,
}
export default Status
