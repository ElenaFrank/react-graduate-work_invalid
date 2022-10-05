import React from "react"
import PropTypes from "prop-types"

const GroupList = ({ items, valueProperty, contentProperty }) => {
  console.log()
  return (
    <ul className="list-group">
      {/* eslint-disable-next-line array-callback-return */}
      {Object.keys(items).map(item => {
        return < li key={items[item][valueProperty]} className="list-group-item">{items[item][contentProperty]}</li>
      })}

    </ul>
  )
}
GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name"
}
GroupList.propTypes = {
  items: PropTypes.object.isRequired,
  valueProperty: PropTypes.string,
  contentProperty: PropTypes.string
}

export default GroupList
