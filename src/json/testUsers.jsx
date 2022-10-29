import React from "react"
import PropType from "prop-types"

const UsersTest = ({ id, name }) => {
    return (
        <span key={id} className={"badge m-1 bg-primary"}>
            {name}
        </span>
    )
}

UsersTest.propTypes = {
    id: PropType.number,
    name: PropType.string
}

export default UsersTest
