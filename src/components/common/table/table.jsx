import React from "react"
import TableHeader from "./tableHeader"
import TableBody from "./tableBody"
import PropType from "prop-types"

const Table = ({ onSort, selectedSort, columns, data, children }) => {
    return (
        <table className="table">
            {children || <>
                <TableHeader {...{ onSort, selectedSort, columns }}/>
                <TableBody {...{ columns, data } } />
            </>}

        </table>
    )
}
Table.propTypes = {
    onSort: PropType.func,
    selectedSort: PropType.object.isRequired,
    columns: PropType.object.isRequired,
    data: PropType.array.isRequired,
    children: PropType.array
}
export default Table
