import React from "react"
import Quality from "./quality"
// import Bookmark from "./bookmark"
import PropType from "prop-types"

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onToggleBookMark
}) => {
    const handleDeleteRow = () => {
        onDelete(_id)
    }

    return (
        <tr key={_id}>
            <th scope="row">{name}</th>
            <td>
                {qualities.map((quality) => {
                    return <Quality key={quality._id} {...quality}></Quality>
                })}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}</td>
            <td>
                {/* <Bookmark id={_id} status={bookmark} onBookMark={() => onToggleBookMark(_id)}></Bookmark> */}
            </td>
            <td style={{ paddingTop: "0" }}>
                <button className="btn btn-danger m-2" onClick={handleDeleteRow} role={"button"}>
          Delete
                </button>
            </td>
        </tr>
    )
}
User.propTypes = {
    onDelete: PropType.func.isRequired,
    onToggleBookMark: PropType.func.isRequired,
    completedMeetings: PropType.number.isRequired,
    rate: PropType.number.isRequired,
    _id: PropType.string.isRequired,
    name: PropType.string.isRequired,
    profession: PropType.object.isRequired,
    qualities: PropType.array.isRequired,
    bookmark: PropType.bool
}

export default User
