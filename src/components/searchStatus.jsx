import React from "react"
import PropType from "prop-types"

const Status = ({ length }) => {
    const renderParse = () => {
        let altCount = length
        altCount = altCount > 100 ? altCount % 100 : altCount
        altCount = altCount > 20 && altCount < 100 ? altCount % 10 : altCount

        return altCount >= 2 && altCount <= 4
            ? " человека тусанут"
            : " человек тусанет"
    }

    return (
        <h3>
            <span
                className={
                    // eslint-disable-next-line yoda
                    !length ? "badge m-1 bg-danger" : "badge m-1 bg-primary"
                }
            >

                {!length
                    ? "Никто с тобой не тусонет"
                    : `${length} ${renderParse()} с тобой сегодня` }
            </span>
        </h3>
    )
}

Status.propTypes = {
    length: PropType.number.isRequired,
}
export default Status
