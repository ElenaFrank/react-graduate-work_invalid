import React from "react"
import UsersListPage from "../components/page/usersListPage"
import UserPage from "../components/page/userPage/userPage"
import { useParams, useHistory } from "react-router-dom"
import Edit from "../components/page/editPage"

const Users = () => {
    const params = useParams()
    const history = useHistory()
    const { edit, userId } = params

    const comebackAllUsers = () => {
        history.push("/users")
    }

    return <>

        {userId
            ? edit
                ? <Edit id = {userId}/>
                : <UserPage comebackAllUsers={comebackAllUsers} id = {userId}/>
            : <UsersListPage />}
    </>
}

export default Users
