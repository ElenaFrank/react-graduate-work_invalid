import React from "react"
import PropType from "prop-types"
import _ from "lodash"

const TableBody = ({ data, columns }) => {
    const renderComponent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component
            if (typeof component === "function") {
                return component(item)
            }
            return component
        }
        return _.get(item, columns[column].path)
    }

    return (
        <tbody>
            {data.map(item => <tr key = {item._id}>
                {Object.keys(columns).map(column => (
                    <td key = {column} >
                        {renderComponent(item, column)}
                    </td>
                ))}
            </tr>)}
        </tbody>
    )
}
TableBody.propTypes = {
    data: PropType.array.isRequired,
    columns: PropType.object.isRequired
}
export default TableBody
