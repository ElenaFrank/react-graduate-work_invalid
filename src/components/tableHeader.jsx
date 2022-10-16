/* eslint-disable react/prop-types */
import React, { useState } from "react"
import PropType from "prop-types"

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const [sortedCoulumn, setSortedColumn] = useState([])
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc",
                style: selectedSort.order === "desc" ? "bi bi-caret-down-fill" : "bi bi-caret-up-fill"
            })
        } else {
            onSort({ path: item, order: "asc", style: "bi bi-caret-up-fill" })
            const isThereArray = sortedCoulumn.some(element => element === item)
            if (!isThereArray) {
                const newSortedColumn = [...sortedCoulumn]
                newSortedColumn.push(item)
                setSortedColumn(newSortedColumn)
            }
        }
    }

    const handleStyle = (item) => {
        if (selectedSort.path === item) {
            return selectedSort.order === "asc" ? "bi bi-caret-up-fill" : "bi bi-caret-down-fill"
        }
    }

    const renderSpan = (item) => {
        if (sortedCoulumn) {
            const isSort = sortedCoulumn.some(element => element === item)
            if (item && isSort) {
                return handleStyle(item)
            }
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
                        <span className={renderSpan(columns[column]?.path)}></span>
                    </th>
                ))}

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
