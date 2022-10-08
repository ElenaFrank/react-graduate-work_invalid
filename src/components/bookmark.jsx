import React from "react"
import PropType from "prop-types"

const BookMark = ({ user, onBookMark }) => {
    const clickBookMark = () => {
        onBookMark(user._id)
    }

    return (
        <button style={{ border: "1px solid black" }}>
            <i
                className={!user.bookmark ? "bi bi-bookmark" : "bi bi-bookmark-fill"}
                onClick={clickBookMark}
            ></i>
        </button>
    )
}
BookMark.propTypes = {
    user: PropType.object.isRequired,
    onBookMark: PropType.func.isRequired,
    _id: PropType.string,
    bookmark: PropType.bool,
}

export default BookMark
