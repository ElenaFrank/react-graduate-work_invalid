
import React from "react"
import Table from "../common/table"
import BookMark from "../common/bookmark"
import Qualities from "./quality"
import PropType from "prop-types"
import { Link } from "react-router-dom"

const UserTable = ({ users, onSort, selectedSort, onDeleteRow, onToggleBookMark }) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (user) => (
                <Link key = {user._id} to = {`users/${user._id}`}>{user.name}</Link>
            )
        },
        qualities: {
            name: "Качества",
            component: (user) => (
                <Qualities qualities = {user.qualities} />
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

UserTable.propTypes = {
    users: PropType.array.isRequired,
    onDeleteRow: PropType.func.isRequired,
    onToggleBookMark: PropType.func.isRequired,
    onSort: PropType.func.isRequired,
    currentSort: PropType.object.isRequired,
    bookmark: PropType.bool,
    selectedSort: PropType.objectOf,
    _id: PropType.string
}

export default UserTable
