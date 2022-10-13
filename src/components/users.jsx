import React, { useState, useEffect } from "react"
import API from "../API"
import { paginate } from "../utils/paginate"
import Status from "./searchStatus"
import Pagination from "./pagination"
import GroupList from "./groupList"
import UserTable from "./usersTable"
import { rest } from "lodash"

const Users = () => {
    const [professions, setProfessions] = useState()
    const [users, setUsers] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const pageSize = 4
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        API.professions
            .fetchAll()
            .then((data) =>
                setProfessions(
                    data
                )
            )
    }, [])
    useEffect(() => {
        API.users
            .fetchAll()
            .then(dataUsers =>
                setUsers(dataUsers)
            )
    }, [])

    const handleProfessionsSelect = (params) => {
        setSelectedProf(params)
    }
    const handleDeleteRow = (id) => {
        setUsers(users.filter((user) => user._id !== id))
        userCurrent.length - 1 === 0 && setCurrentPage(currentPage - 1)
    }
    const handlePageChange = (id) => {
        setCurrentPage(id)
    }
    const handleTogBookmark = (id) => {
        const i = users.findIndex((user) => user._id === id)
        const newUsers = [...users]

        newUsers[i].bookmark = !newUsers[i].bookmark
        setUsers(newUsers)
    }

    const filteredUsers = selectedProf
        ? users.filter(user => {
            return user.profession._id === selectedProf._id
        })
        : users
    const count = filteredUsers && filteredUsers.length
    const userCurrent = filteredUsers && paginate(filteredUsers, currentPage, pageSize)

    const clearFilter = () => {
        setSelectedProf()
    }
    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

    return (
        <div className="d-flex">
            <div className="d-flex flex-column flex-shrink-0 p-3">
                {professions && (
                    <>
                        <GroupList
                            items={professions}
                            onItemSelect={handleProfessionsSelect}
                            selectedItem={selectedProf}
                        ></GroupList>
                        <button className={"btn btn-secondary mt-2"} onClick={clearFilter}>Clear</button>
                    </>
                )}
            </div>
            <div className="d-flex flex-column">
                <Status length={count}></Status>
                {count > 0 && (
                    <>
                        <UserTable users={userCurrent} {...rest}
                        >
                        </UserTable>
                        <div className="d-flex justify-content-center">
                            <Pagination
                                itemsCount={count}
                                pageSize={pageSize}
                                onPageChange={handlePageChange}
                                currentPage={currentPage}
                            ></Pagination>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Users
