import React from "react";
import {Link} from "react-router-dom";


interface WelcomeProps {
    // Title: string
    // Image: string
    // Body: string
}

// const addUser: React.FC<OtherProps> = ({ name, color }) =>
//     <h1>My Website Heading</h1>

export const welcome: React.FC<WelcomeProps> =
    () => (
        <div className="welcome">
            <h1>welcome to hsenid</h1>
            <nav>
                <ul>
                    {/*<li>*/}
                    {/*    <Link to="/">Home</Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link to="/adduser">Add User</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )