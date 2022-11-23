import React from "react"
import UsersListPage from "../components/page/usersListPage"
import UserPage from "../components/page/userPage/userPage"
import { useParams, useHistory } from "react-router-dom"
import Edit from "../components/page/editPage"
// import API from "../API"

const Users = () => {
    const params = useParams()
    const history = useHistory()
    const { edit, userId } = params

    const comebackAllUsers = () => {
        history.push("/users")
    }

    const comebackUser = () => {
        history.push(`/users/${userId}`)
    }

    return <>

        {userId
            ? edit
                ? (
                    <div className="container mt-5">
                        <div className="row">
                            <div className=".col-md-6 .offset-md-3 shadow p-4">
                                <Edit
                                    id = {userId}
                                    comebackUser = {comebackUser}
                                />
                            </div>
                        </div>
                    </div>
                )

                : <UserPage comebackAllUsers={comebackAllUsers} id = {userId}/>
            : <UsersListPage />}
    </>
}

export default Users
