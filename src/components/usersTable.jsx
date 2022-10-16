/* eslint-disable react/prop-types */
import React from "react"
import Table from "./table"
// import TableHeader from "./tableHeader"
// import TableBody from "./tableBody"
import BookMark from "./bookmark"
import QualitiesList from "./qualitiesList"
import PropType from "prop-types"

// eslint-disable-next-line react/prop-types
const UserTable = ({ users, onSort, selectedSort, onDeleteRow, onToggleBookMark }) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: {
            name: "Качества",
            component: (user) => (
                <QualitiesList qualities = {user.qualities} />
            )
        },
        profession: { path: "profession.name", name: "Провфессия" },
        completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",

            component: (user) => <BookMark id={user._id} status={user.bookmark} onBookMark={onToggleBookMark} />
        },
        delete: {
            component: (user) => (
                <button className="btn btn-danger m-2" style={{ paddingTop: "2" }} onClick={() => onDeleteRow(user._id)} role={"button"}>
        Delete
                </button>)
        }
    }
    return (
        <Table onSort = {onSort} selectedSort={selectedSort} columns = {columns} data= {users}></Table>

    )
}

UserTable.protoTypes = {
    users: PropType.array.isRequired,
    onDeleteRow: PropType.func.isRequired,
    onToggleBookMark: PropType.func.isRequired,
    onSort: PropType.func.isRequired,
    currentSort: PropType.object.isRequired,
    bookmark: PropType.bool,
    _id: PropType.string
}

export default UserTable
