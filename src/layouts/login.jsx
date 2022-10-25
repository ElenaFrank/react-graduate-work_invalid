import React from "react"
import UsersTest from "../json/testUsers"
import getUsers from "../json/getUsers"

const Login = () => {
    const users = getUsers()
    console.log(users)
    if (users) {
        return (
            <>
                console.log(users)
                {users.map(user => {
                    // eslint-disable-next-line react/jsx-key
                    return <UsersTest id={user.id} name = {user.name} />
                })}
            </>
        )
    } else return "Loading ..."
}

export default Login
