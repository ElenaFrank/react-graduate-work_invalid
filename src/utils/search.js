export function searchData(data, value) {
    const found = data.filter(dataEl => {
        return dataEl?.name.toLowerCase().includes(value)
    })
    return found
}
