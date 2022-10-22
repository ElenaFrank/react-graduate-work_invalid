import React from "react"
import UsersList from "../components/usersList"
import UserPage from "../components/userPage"
import { useParams, useHistory } from "react-router-dom"

const Users = () => {
    const params = useParams()
    const history = useHistory()
    const { userId } = params

    const comebackAllUsers = () => {
        history.push("/users")
    }
    return <>{userId ? <UserPage comebackAllUsers={comebackAllUsers} id = {userId}/> : <UsersList />}</>
}

export default Users
