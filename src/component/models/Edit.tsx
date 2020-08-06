 import React from 'react';
import "./Modal.css";
import {useEffect,useState} from 'react';
import {EditForm} from "./EditForm";

 interface editProps {
    isShowingedit:any,


}


export const Edit: React.FC<editProps> =
    ({isShowingedit}) => {
        const [employee, setEmployee] = useState();
        const [editemployee, seteditEmployee] = useState();
        const [showedit, setShowEdit] = useState(false);


        async function fetchData() {
            const res = await fetch("http://localhost:7070/edituser"
            );
            res
                .json()
                .then(res => setEmployee(res));
          //  console.log(employee);
        }

       console.log(editemployee);
        function editClick(row: { employeeId: React.ReactNode; departmentId: React.ReactNode; firstName: React.ReactNode;lastName: React.ReactNode; }){
            seteditEmployee(row);
             // <EditForm firstName={row.firstName} lastname={row.lastName}/>
//setShowEdit(true);

        }
        useEffect(() => {
                fetchData();  
        });
        // let row;
    return(
        isShowingedit ?<div className='wpr'>

                <table>
                    <thead>
                    <tr>
                        <th>EID</th><br/><br/>
                        <th>DID</th><br/><br/>
                        <th>First Name</th><br/><br/>
                        <th>Edit column</th><br/><br/>
                    </tr>
                    </thead>
                    <tbody>
                    {employee.map((row: { employeeId: React.ReactNode; departmentId: React.ReactNode; firstName: React.ReactNode;lastName: React.ReactNode; }, index: string | number | undefined) =>
                        <tr key={index}>
                            <td>
                                {row.employeeId}
                            </td><br/><br/>
                            <td>
                                {row.departmentId}
                            </td><br/><br/>
                            <td>
                                {row.firstName}
                            </td><br/><br/>
                            <td><button onClick={()=>editClick(row)}>Edit</button></td>

                        </tr>
                    )}
                    {/*<tr>*/}
                    {/*    <td>{765424356}</td><br/><br/>*/}
                    {/*    <td>{'ENG'}</td><br/><br/>*/}
                    {/*    <td><a>Edit</a></td><br/><br/>*/}

                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <td>{365421356}</td><br/><br/>*/}
                    {/*    <td>{'HR'}</td><br/><br/>*/}
                    {/*    <td><a>Edit</a></td><br/><br/>*/}

                    {/*</tr><tr>*/}
                    {/*    <td>{765424336}</td><br/><br/>*/}
                    {/*    <td>{'ENG'}</td><br/><br/>*/}
                    {/*    <td><a>Edit</a></td><br/><br/>*/}

                    {/*</tr><tr>*/}
                    {/*    <td>{659424356}</td><br/><br/>*/}
                    {/*    <td>{'HR'}</td><br/><br/>*/}
                    {/*    <td><a>Edit</a></td><br/><br/>*/}

                    {/*</tr>*/}
                    </tbody>
                </table>
            </div>

  :null)};

