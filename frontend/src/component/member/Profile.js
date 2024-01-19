import axios  from "axios";
import {  useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Member_menu from "./Member_menu";

export default function Profile() {
   var [data,setdata]=useState([])
    var id=useParams(id);
   useEffect(() => {
    Header.get(`/members/view/${id.id}`,{
      
    })
    .then(function (response) {
        setdata(response.data.data)
        console.log(response.data.data)
        
    })
    .catch(function (error){
        console.log(error);
    });
},[])
    return(
        <>
        <Member_menu/>
        <div className="h-screen bg-blue-950 ml-[16.66%] pl-5 pt-5">
            <div className=" text-white text-center text-4xl pb-10 flex">Student Profile</div>
            <table className="text-white w-1/2">
                <tr>
                    <td>First Name</td>
                    <td><input type="text" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5"   value={data.firstname}></input></td>
                </tr>
                <tr>
                    <td>Middle Name</td>
                    <td><input type="text" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" value={data.middlename}></input></td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td><input type="text" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5"  value={data.lastname}></input></td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td> 
                        <input type="text"className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" value={data.gender}></input>
                    </td>
                </tr>
                <tr>
                    <td>Facluty Name</td>
                    <td><input type="text" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" value={data.faculty_id?data.faculty_id.name:''}></input></td>
                </tr>
                <tr>
                    <td>Contect</td>
                    <td><input type="number" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" value={data.contect}></input></td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td><input type="text" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" value={data.address}></input></td>
                </tr>
                <tr>
                    <td>Pc no.</td>
                    <td>
                        <input type="text" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" value={data.pc_no}></input>
                    </td>
                </tr>
                <tr>
                    <td>Starting Date</td>
                    <td><input type="date"  className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" value={data.startingdate?data.startingdate.slice(0,10):""}></input></td>
                </tr>
                <tr>
                    <td>Ending Date</td>
                    <td><input type="date"  className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" value={data.enddate?data.enddate.slice(0,10):""}></input></td>
                </tr>                                                                                         
                
            </table>
        </div>

        </>
       
    )
}

