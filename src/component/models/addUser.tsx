import React from "react";
import { Link } from "react-router-dom";
import {useState} from 'react';
import {Employee} from "./Employe";





const Add = () => {
       const [fname, setfname] = useState();
    const [lname, setlname] = useState();
    const [email, setemail] = useState();
    const [age, setage] = useState();
    const [designation, setdesignation] = useState();
    const [gender, setgender] = useState();
    const [address, setaddress] = useState();
    const [mobileNumber, setmobileNumber] = useState();
    const [factionId, setfactionId] = useState();
    const [subId, setsubId] = useState();
    const [nic, setnic] = useState();
    const [departmentId, setdepartmentId] = useState();
    const [lastModifiedDate, setlastModifiedDate] = useState();
    // const employee={
    //     fname=fname
    // }





    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        console.log(address);
        const newEmployeeModal: Employee = {
            fname,
            lname,
            email,
            age,
            designation,
            gender,
            address,
            mobileNumber,
            factionId,
            subId,
            nic,

            departmentId,
            lastModifiedDate      };
        console.log(newEmployeeModal);

        //  const data = new FormData(form.current)
        fetch("http://localhost:7070/register", { method: 'POST', body:JSON.stringify(newEmployeeModal), headers: {
                "Content-Type": "application/json",
            }})
            .then(res => res.json())
             // .then(json => setUser(json.user))
    }


        return(
        <div className="adduser">
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First name:</label><br/>
                <input type="text" name="fname" value={fname} onChange={e => setfname(e.target.value )}/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                <input type="text" name="lname" value={lname} onChange={e => setlname(e.target.value )}/><br/>
                <label htmlFor="email">Email:</label><br/>
                <input type="text" name="email" value={email} onChange={e => setemail(e.target.value )}/><br/>
                <label htmlFor="age">Age :</label><br/>
                <input type="text" id="age" name="age" value={age} onChange={e => setage(e.target.value )}/><br/>
                <label htmlFor="designation">Designation :</label><br/>
                <input type="text" id="designation" name="designation" value={designation} onChange={e => setdesignation(e.target.value )}/><br/>
                <label htmlFor="gender">Gender :</label><br/>
                <input type="text" id="gender" name="gender" value={gender} onChange={e => setgender(e.target.value )}/><br/>
                <label htmlFor="address">Address :</label><br/>
                <input type="text" id="address" name="address" value={address} onChange={e => setaddress(e.target.value )}/><br/>
                <label htmlFor="mobileNumber">Mobile number :</label><br/>
                <input type="text" id="mobileNumber" name="mobileNumber" value={mobileNumber} onChange={e => setmobileNumber(e.target.value )}/><br/>
                <label htmlFor="factionId">Faction Id :</label><br/>
                <input type="text" id="factionId" name="factionId" value={factionId} onChange={e => setfactionId(e.target.value )}/><br/>
                <label htmlFor="subId">Sub Id :</label><br/>
                <input type="text" id="subId" name="subId" value={subId} onChange={e => setsubId(e.target.value )}/><br/>
                <label htmlFor="nic">Nic :</label><br/>
                <input type="text" id="nic" name="nic" value={nic} onChange={e => setnic(e.target.value )}/><br/>
                <label htmlFor="departmentId">Department Id :</label><br/>
                <input type="text" id="departmentId" name="departmentId" value={departmentId} onChange={e => setdepartmentId(e.target.value )}/><br/>
                <label htmlFor="lastModifiedDate">Last Date :</label><br/>
                <input type="text" id="lastModifiedDate" name="lastModifiedDate" value={lastModifiedDate} onChange={e => setlastModifiedDate(e.target.value )}/><br/>

                <button type="submit" value="Submit">Add</button>


            </form>

        </div>
    )};

export default Add;