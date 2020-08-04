import React from "react";
import {Link} from "react-router-dom";


interface EdituserProps {
     fName: string
    lName: string
    age: string
    designation: string

    // Body: string
}

// const addUser: React.FC<OtherProps> = ({ name, color }) =>
//     <h1>My Website Heading</h1>

export const editUser: React.FC<EdituserProps> =
    ({fName,lName,age,designation}) => (
        <div className="edit">
            <h1>edit</h1>
        </div>
    )