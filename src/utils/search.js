export function searchUsers(selectedProf, filteredUsers, allUsers, value) {
    const dataUser = selectedProf ? filteredUsers : allUsers
    const found = dataUser.filter(user => {
        return user.name.toLowerCase().includes(value)
    })
    return found
}
