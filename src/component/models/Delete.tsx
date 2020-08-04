import React from 'react';
import "./Modal.css";

interface deleteProps {
    isShowingdelete:any,
}

export const Delete: React.FC<deleteProps> =
    ({isShowingdelete}) => {

    return(
            isShowingdelete ?<div className='wpr'>
                <table>
                    <thead>
                    <tr>
                        <th>EID</th><br/><br/>
                        <th>DID</th><br/><br/>
                        <th>Delete column</th><br/><br/>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{765424356}</td><br/><br/>
                            <td>{'ENG'}</td><br/><br/>
                            <td><a>Delete</a></td><br/><br/>

                        </tr>
                        <tr>
                            <td>{365421356}</td><br/><br/>
                            <td>{'HR'}</td><br/><br/>
                            <td><a>Delete</a></td><br/><br/>

                        </tr><tr>
                            <td>{765424336}</td><br/><br/>
                            <td>{'ENG'}</td><br/><br/>
                            <td><a>Delete</a></td><br/><br/>

                        </tr><tr>
                            <td>{659424356}</td><br/><br/>
                            <td>{'HR'}</td><br/><br/>
                            <td><a>Delete</a></td><br/><br/>

                        </tr>
                    </tbody>
                </table>

            </div>: null)};

