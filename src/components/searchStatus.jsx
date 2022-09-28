import React from "react"
import PropType from "prop-types"

const Status = ({ length }) => {
  const renderParse = () => {
    let altCount = length
    altCount = altCount > 100 ? altCount % 100 : altCount
    altCount = 20 < altCount && altCount < 100 ? altCount % 10 : altCount

    return altCount >= 2 && altCount <= 4
      ? " человека тусанут"
      : " человек тусанет"
  }

  return (
    <h3>
      <span
        className={
          length !== 0 ? "badge m-1 bg-primary" : "badge m-1 bg-danger"
        }
      >
        {length !== 0
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
