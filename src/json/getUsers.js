import { useState } from "react"
export function getUsers() {
    const [users, setUsers] = useState([])
    fetch("http://localhost:3001/user", { method: "GET" })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => {
            console.log(data)
            setUsers(data)
            return users
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            console.log("Get!")
        })
}
