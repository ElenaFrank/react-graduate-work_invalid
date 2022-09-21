import React from "react";
import User from "./user";

const Users = (props) => {
  return (
    <>
      {props.usersList.map((user) => {
        return (
          <User
            key={user._id}
            {...user}
            onDelete={props.onDeleteRow}
            onBookMark={props.onBookMark}
          ></User>
        );
      })}
    </>
  );
};

export default Users;
