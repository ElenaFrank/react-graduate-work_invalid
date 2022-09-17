import React from "react";
import User from "./user";

const Users = (props) => {
    
    console.log(props.onDeleteRow)
    return (
        <>
            {props.usersList.map(user => {
                return (
                    <User
                        key={user._id}
                        {...user}
                        onDelete={props.onDeleteRow}
                    >
                    </User>
                )
            })}
        </>
    )
}

export default Users