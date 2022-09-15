import React from "react";
import Quality from "./quality";

const User = (props) => {

    const handleDeleteRow = () => {
        props.onDeleteRow(props._id)
    }

    return (
        <tr key={props._id}>
            <th scope="row">{props.name}</th>
            <td>
                {props.qualities.map(quality => {
                    return (
                        <Quality
                            key={quality._id}
                            {...quality}
                        >
                        </Quality>
                    )
                })}
            </td>
            <td>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate}</td>
            <td><button className="btn btn-danger m-2" onClick={handleDeleteRow}>Delete</button></td>
        </tr>
    )

}

export default User