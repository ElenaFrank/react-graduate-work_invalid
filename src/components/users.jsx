import React, { useState } from "react";
import API from "../API"

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll())
    const lenUsersArray = users.length

    const getTextTittle = () => {
        return lenUsersArray === 0 ? "Никто с тобой не тусонет" :  renderPharse()
    }

    const renderPharse = () => {
        let altCount = lenUsersArray
        altCount = altCount>100 ? altCount%100 : altCount
        altCount = (20<altCount && altCount<100) ? altCount%10 : altCount
        
        return altCount >=2
        && altCount<=4 ? " человека тусанут с тобой сегодня" : " человек тусанет с тобой сегодня"
    }

    const getBadgeClasses = (classValue) => {
        let badge = "badge m-1 bg-"
        return badge += classValue
    }


    const handleDeleteRow = (id) => {
        setUsers(prevState =>prevState.filter(user => user._id !== id) )
    }

    function renderQualitiesTags (qualities) {
        return qualities.map(quality => {
            return (
                <span
                    key={quality._id}
                    className={getBadgeClasses(quality.color)}
                >
                {quality.name}
            </span>
            )
        })
    }

    const renderUserTags = () => {
         return users.map(user => {
            return (
            <tr key={user._id}>
                <th scope="row">{user.name}</th>
                <td>
                    {renderQualitiesTags(user.qualities)}
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
            <span
                className={lenUsersArray !==0 ? getBadgeClasses("primary") : getBadgeClasses("danger")}
            >
                {lenUsersArray !==0 && lenUsersArray}{getTextTittle()}
            </span>
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