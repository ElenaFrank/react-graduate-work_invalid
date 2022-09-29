import React, { useState } from "react"
import User from "./user"
import API from "../API"
import { paginate } from "../utils/paginate"
import Status from "./searchStatus"
import Pagination from "./pagination"

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll())
  // const count = users.length
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (id) => {
    setCurrentPage(id)
  }

  const handleDeleteRow = (id) => {
    setUsers(users.filter((user) => user._id !== id))
  }

  const handleTogBookmark = (id) => {
    const i = users.findIndex((user) => user._id === id)
    const newUsers = [...users]

    newUsers[i].bookmark = !newUsers[i].bookmark
    setUsers(newUsers)
  }

  const userCurrent = paginate(users, currentPage, pageSize)

  return (
    <>
      <Status length={users.length}></Status>
      {users.length !== 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Провфессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <>
              {userCurrent.map((user) => {
                return (
                  <User
                    key={user._id}
                    {...user}
                    onDelete={handleDeleteRow}
                    onBookMark={handleTogBookmark}
                  ></User>
                )
              })}
            </>
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={users.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      ></Pagination>
    </>
  )
}

export default Users
