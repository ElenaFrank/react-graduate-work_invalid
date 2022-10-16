/* eslint-disable react/prop-types */
import React from "react"
import PropType from "prop-types"

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" })
        } else {
            onSort({ path: item, order: "asc" })
        }
    }
    return (
        <thead>
            <tr>
                {Object.keys(columns).map(column => (
                    <th
                        key={column}
                        onClick={columns[column]?.path ? () => handleSort(columns[column].path) : undefined}
                        scope="col"
                        {...{ role: columns[column].path && "button" }}
                    >
                        {columns[column].name}
                    </th>
                ))}
                {/* <th onClick={() => handleSort("name")} scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th onClick={() => handleSort("profession.name")} scope="col">Провфессия</th>
                <th onClick={() => handleSort("completedMeetings")} scope="col">Встретился, раз</th>
                <th onClick={() => handleSort("rate")} scope="col">Оценка</th>
                <th onClick={() => handleSort("bookmark")} scope="col">Избранное</th>
                <th scope="col"></th> */}
            </tr>
        </thead>
    )
}
TableHeader.protoTypes = {
    selectedSort: PropType.array.isRequired,
    onSort: PropType.func.isRequired,
    columns: PropType.object.isRequired
}
export default TableHeader
