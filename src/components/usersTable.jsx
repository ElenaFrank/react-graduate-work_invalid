/* eslint-disable no-undef */
import React from "react"
import User from "./user"

const UserTable = ({ users, ...rest }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Провфессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col">Избранное</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <>
                    {users &&
            users.map((user) => {
                return (
                    <User
                        key={user._id}
                        {...user}
                        onDelete={Delete}
                        onBookMark={TogBookmark}
                    ></User>
                )
            })}
                </>
            </tbody>
        </table>

    )
}

export default UserTable
