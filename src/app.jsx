import React, {useState} from "react";
import Users from "../src/components/users";
import Status from "../src/components/searchStatus";
import API from "./API"
import Pagination from "./components/pagination";

function App() {
    const [users, setUsers] = useState(API.users.fetchAll())
    const count = users.length
    const pageSize = 4

    const handleDeleteRow = (id) => {
        setUsers(users.filter(user => user._id !== id) )
    }

    const handleTogBookmark = (id) => {
        const i = users.findIndex(user => user._id===id)
        const newUsers = [...users]

        newUsers[i].bookmark = !newUsers[i].bookmark
        setUsers(newUsers)
    }

    const handlePageChange = (param) => {
        

    }
     

    return (
        <>
            <Status length = {count}></Status>
            {count !==0 && 
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
                            usersList = {users}
                            onDeleteRow = {handleDeleteRow}
                            onBookMark = {handleTogBookmark}
                        >

                        </Users>
                    </tbody>
                </table>
                
            }
            <Pagination count={count} pageSize={pageSize} onPageChange={handlePageChange}></Pagination>
        </>
    )
}

export default App