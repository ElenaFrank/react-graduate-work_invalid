/* eslint-disable react/prop-types */
import React from "react"
// import User from "./user"
import TableHeader from "./tableHeader"
import PropType from "prop-types"
import TableBody from "./tableBody"
import BookMark from "./bookmark"

// eslint-disable-next-line react/prop-types
const UserTable = ({ users, onSort, selectedSort, onDeleteRow, onToggleBookMark, ...rest }) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: { name: "Качества" },
        profession: { path: "profession.name", name: "Провфессия" },
        completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => {
                <BookMark
                    status={user.bookmark}
                    onBookMark={() => onToggleBookMark(user._id)}></BookMark>
            }
        },
        delete: { component: "delete" }
    }
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }}/>
            <TableBody {...{ columns, data: users } }></TableBody>
            {/* <tbody>
                <>
                    {users &&
                            users.map((user) => {
                                return (
                                    <User
                                        key={user._id}
                                        {...user}
                                        onDelete={onDeleteRow}
                                        onTogBookMark={onTogBookMark}
                                    ></User>
                                )
                            })}
                </>
            </tbody> */}
        </table>

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
