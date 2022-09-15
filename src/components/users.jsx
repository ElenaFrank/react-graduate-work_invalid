import React, { useState } from "react";
import User from "./user";
import Status from "./searchStatus";
import API from "../API"

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll())

    const handleDeleteRow = (id) => {
        setUsers(users.filter(user => user._id !== id) )
    }

    return (
        <>
            <Status length = {users.length}></Status>

            {users.length !==0 &&

                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Провфессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (
                            <User
                                key={user._id}
                                {...user}
                                onDeleteRow={handleDeleteRow}
                            >
                            </User>
                            )
                        })}
                    </tbody>
                </table>
            }
        </>
    )
}

export default Users