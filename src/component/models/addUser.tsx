import React from "react";


interface AdduserProps {
    // Title: string
    // Image: string
    // Body: string
}

// const addUser: React.FC<OtherProps> = ({ name, color }) =>
//     <h1>My Website Heading</h1>

export const addUser: React.FC<AdduserProps> =
    () => (
        <div className="adduser">
            <form>
                <label htmlFor="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname"/><br/>
                <label htmlFor="age">Age :</label><br/>
                <input type="text" id="age" name="age"/><br/>
                <label htmlFor="designation">Designation :</label><br/>
                <input type="text" id="designation" name="designation"/>


            </form>

        </div>
    )