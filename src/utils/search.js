export function searchData(data, value) {
    // const dataUser = selectedProf ? filteredUsers : allUsers
    const found = data.filter(dataEl => {
        return dataEl.name.toLowerCase().includes(value)
    })
    return found
}
