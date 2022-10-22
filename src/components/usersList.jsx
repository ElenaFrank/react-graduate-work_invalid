/* eslint-disable no-undef */
import React, { useState, useEffect } from "react"
import API from "../API"
import { paginate } from "../utils/paginate"
import Status from "./searchStatus"
import Pagination from "./pagination"
import GroupList from "./groupList"
import UserTable from "./usersTable"
import _ from "lodash"

const Users = () => {
    const [professions, setProfessions] = useState()
    const [users, setUsers] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc", style: "bi bi-caret-up-fill" })
    const pageSize = 8
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

    const handlePageChange = (id) => {
        setCurrentPage(id)
    }
    const handleToggleBookMark = (id) => {
        const i = users.findIndex((user) => user._id === id)
        const newUsers = [...users]

        newUsers[i].bookmark = !newUsers[i].bookmark
        setUsers(newUsers)
    }

    // Changing of sort
    const handleSort = (item) => {
        setSortBy(item)
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

    if (users) {
        const filteredUsers = selectedProf
            ? users.filter(user => {
                return user.profession._id === selectedProf._id
            })
            : users

        // Sort of elements
        const sortedUsers = _.orderBy(filteredUsers, sortBy.path, sortBy.order)
        const count = filteredUsers && filteredUsers.length

        // Pages
        const userCurrent = filteredUsers && paginate(sortedUsers, currentPage, pageSize)

        const clearFilter = () => {
            setSelectedProf()
        }

        const handleDeleteRow = (id) => {
            setUsers(users.filter((user) => user._id !== id))
            userCurrent.length - 1 === 0 && setCurrentPage(currentPage - 1)
        }

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
                    {count !== undefined && <Status length={count}></Status>}
                    {count > 0 && (
                        <>
                            <UserTable
                                users={userCurrent}
                                onSort={handleSort}
                                selectedSort = {sortBy}
                                onDeleteRow = {handleDeleteRow}
                                onToggleBookMark = {handleToggleBookMark}
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
    return "Loading..."
}

export default Users
