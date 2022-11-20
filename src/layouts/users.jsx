import React from "react"
import UsersListPage from "../components/page/usersListPage"
import UserPage from "../components/page/userPage/userPage"
import { useParams, useHistory } from "react-router-dom"
import Edit from "../components/page/edit"

const Users = () => {
    const params = useParams()
    const history = useHistory()
    const { ed, userId } = params

    const comebackAllUsers = () => {
        history.push("/users")
    }
    return <>

        {userId
            ? <UserPage comebackAllUsers={comebackAllUsers} id = {userId}/>
            : ed
                ? <Edit />
                : <UsersListPage />}
    </>
}

export default Users
