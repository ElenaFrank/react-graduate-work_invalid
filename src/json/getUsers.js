const getUsers = () => {
    fetch("http://localhost:3001/user", { method: "GET" })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data
        })
}

export default getUsers
