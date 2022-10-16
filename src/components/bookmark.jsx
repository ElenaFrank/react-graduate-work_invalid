import React from "react"
import PropType from "prop-types"

const BookMark = ({ status, onBookMark }) => {
    // const clickBookMark = () => {
    //     onBookMark(id)
    // }

    return (
        <button style={{ border: "1px solid black" }}>
            <i
                className={!status ? "bi bi-bookmark" : "bi bi-bookmark-fill"}
                // onClick={clickBookMark}
            ></i>
        </button>
    )
}
BookMark.propTypes = {
    user: PropType.object,
    onBookMark: PropType.func,
    id: PropType.string,
    status: PropType.bool,
}

export default BookMark
