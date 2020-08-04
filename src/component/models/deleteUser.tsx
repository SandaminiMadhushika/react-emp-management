import React from "react";
import {Link} from "react-router-dom";


interface DeleteuserProps {
    fName: string
    lName: string
    age: string
    designation: string

}

// const addUser: React.FC<OtherProps> = ({ name, color }) =>
//     <h1>My Website Heading</h1>

export const deleteUser: React.FC<DeleteuserProps> =
    ({fName,lName,age,designation}) => (
        <div className="dlt">
            <h1>delete</h1>
                  </div>
    )