import React from "react";
import { Link } from "react-router-dom";


interface EditShowProps {
     firstName:any
    lastName: any
    // Body: string
}

// const addUser: React.FC<OtherProps> = ({ name, color }) =>
//     <h1>My Website Heading</h1>

export const EditForm: React.FC<EditShowProps> =
    ({firstName,lastName}) => {
        return(
            <div className="edituser">
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname" value={firstName}/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname" value={lastName}/><br/>
                    {/*<label htmlFor="age">Age :</label><br/>*/}
                    {/*<input type="text" id="age" name="age"/><br/>*/}
                    <Link to="/"><button>Add</button></Link><br/><br/><br/><br/>

                </form>

            </div>
        )};