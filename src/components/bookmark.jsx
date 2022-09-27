import React from "react"

const BookMark = (props) => {
  const { user, onBookMark } = props

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

export default BookMark
