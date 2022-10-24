import React, { useState, useEffect } from "react"
import API from "../API"
import QualitiesList from "./qualitiesList"

// eslint-disable-next-line react/prop-types
const UserPage = ({ comebackAllUsers, id }) => {
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
                <span><QualitiesList qualities={userData.qualities} /></span>
                <div>completedMeetings: {userData.completedMeetings}</div>
                <div style={{ marginTop: "10px" }}><h3>Rate: {userData.rate}</h3></div>
                <button onClick={comebackAllUsers}>All users</button>
            </>
        )
    } else return "Loading..."
}

export default UserPage