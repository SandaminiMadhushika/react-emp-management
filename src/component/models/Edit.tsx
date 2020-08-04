 import React from 'react';
import "./Modal.css";

interface editProps {
    isShowingedit:any,

}


export const Edit: React.FC<editProps> =
    ({isShowingedit}) => {return(
        isShowingedit ?<div className='wpr'>

                <table>
                    <thead>
                    <tr>
                        <th>EID</th><br/><br/>
                        <th>DID</th><br/><br/>
                        <th>Edit column</th><br/><br/>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{765424356}</td><br/><br/>
                        <td>{'ENG'}</td><br/><br/>
                        <td><a>Edit</a></td><br/><br/>

                    </tr>
                    <tr>
                        <td>{365421356}</td><br/><br/>
                        <td>{'HR'}</td><br/><br/>
                        <td><a>Edit</a></td><br/><br/>

                    </tr><tr>
                        <td>{765424336}</td><br/><br/>
                        <td>{'ENG'}</td><br/><br/>
                        <td><a>Edit</a></td><br/><br/>

                    </tr><tr>
                        <td>{659424356}</td><br/><br/>
                        <td>{'HR'}</td><br/><br/>
                        <td><a>Edit</a></td><br/><br/>

                    </tr>
                    </tbody>
                </table>

            </div>

  : null)};

