import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import API from "../../../API"
import Qualities from "../../ui/quality"
import Edit from "../edit"

// eslint-disable-next-line react/prop-types
const UserPage = ({ comebackAllUsers, id }) => {
    const openEdit = () => (
        <Edit />
    )
    const loc = useLocation()
    console.log(loc)
    const [userData, setUserData] = useState()
    useEffect(() => {
        API.users
            .getById(id)
            .then(user => {
                setUserData(user)
            })
    }, [])

    if (userData) {
        return (
            <>
                <h1>{userData.name}</h1>
                <h3>Профессия: {userData.profession.name}</h3>
                <span><Qualities qualities={userData.qualities} /></span>
                <div>completedMeetings: {userData.completedMeetings}</div>
                <div style={{ marginTop: "10px" }}><h3>Rate: {userData.rate}</h3></div>
                <button onClick={comebackAllUsers}>All users</button>
                <Link from={`users/${id}`} to = {`users/${id}/edit`}><button onClick={openEdit}>Edit</button></Link>
            </>
        )
    } else return "Loading..."
}

export default UserPage
