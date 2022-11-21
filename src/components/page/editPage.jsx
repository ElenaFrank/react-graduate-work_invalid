import React, { useEffect, useState } from "react"
import API from "../../API"
import PropType from "prop-types"

const Edit = ({ id }) => {
    const [userData, setUserData] = useState()
    useEffect(() => {
        API.users
            .getById(id)
            .then(user => {
                setUserData(user)
            })
    }, [])
    return <h1>{userData._id}</h1>
}
Edit.propTypes = {
    id: PropType.string
}
export default Edit
