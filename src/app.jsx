import React, { useState } from "react"
import Users from "../src/components/users"
import Status from "../src/components/searchStatus"
import API from "./API"
import Pagination from "./components/pagination"
import { paginate } from "./utils/paginate"

function App () {
  const [users, setUsers] = useState(API.users.fetchAll())
  const count = users.length
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
      <Status length={count}></Status>
      {count !== 0 && (
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
            <Users
              usersList={userCurrent}
              onDeleteRow={handleDeleteRow}
              onBookMark={handleTogBookmark}
            ></Users>
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      ></Pagination>
    </>
  )
}

export default App
