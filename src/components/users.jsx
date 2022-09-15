import React, { useState } from "react";
import Qualitie from "./qualitie";
import API from "../API"

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll())
    const lenUsersArray = users.length

    const renderParse = () => {
        let altCount = lenUsersArray
        altCount = altCount>100 ? altCount%100 : altCount
        altCount = (20<altCount && altCount<100) ? altCount%10 : altCount
        
        return altCount >=2
        && altCount<=4 ? " человека тусанут" : " человек тусанет"
    }

    const getBadgeClasses = (classValue) => {
        return "badge m-1 bg-" + classValue
    }


    const handleDeleteRow = (id) => {
        setUsers(users.filter(user => user._id !== id) )
    }

    const renderUserTags = () => {
         return users.map(user => {
            return (
            <tr key={user._id}>
                <th scope="row">{user.name}</th>
                <td>
                    {/* {renderQualitiesTags(user.qualities)} */}
                    {user.qualities.map(qualit => {
                        return (
                        <Qualitie
                            key={qualit._id}
                            id = {qualit._id}
                            color = {qualit.color}
                            name = {qualit.name}
                        >

                        </Qualitie>
                        )
                    })}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td><button className="btn btn-danger m-2" onClick={()=>handleDeleteRow(user._id)}>Delete</button></td>
        </tr>
        )})
    }

    return (
        <>
            <h3>
                <span
                    className={lenUsersArray !==0
                        ? getBadgeClasses("primary")
                        : getBadgeClasses("danger")}
                >
                    {lenUsersArray !==0
                    ? `${lenUsersArray} ${renderParse()} с тобой сегодня`
                        : "Никто с тобой не тусонет"}
                </span>
            </h3>
            {lenUsersArray !==0 &&
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
                    {renderUserTags()}
                    </tbody>
                </table>
            }
        </>
    )
}

export default Users