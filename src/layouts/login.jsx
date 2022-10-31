import React, { useState } from "react"
// import { getUsers } from "../json/getUsers"

const Login = () => {
    const [users, setUsers] = useState([])
    fetch("http://localhost:3001/user", { method: "GET" })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            setUsers(data)
            return (
                <>
                    {users.map(user => {
                        return <span key={user.id}>{user.name}</span>
                    })}
                </>
            )
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            console.log("Get!")
        })
    // return (
    //     <>
    //         {users.map(user => (
    //             <span key={user.id}>{user.name}</span>
    //         ))}
    //     </>
    // )
}

export default Login
