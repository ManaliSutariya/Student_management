import axios  from "axios";
import {  useState } from "react";
import Header from "../Header";
import Admin_menu from "./Admin_menu";

export default function Member_register() {
   var [name,setname]=useState()
   var [email,setemail]=useState()
   var [password,setpassword] = useState()
   var [role,setrole] = useState()
   
    function send_data(){
        Header.post('/admins/register',{
            name:name,
            email:email,
            password:password,
            role:role
        })
        .then(function (response) {
            alert(response.data.status)
            if(response.data.status == "fac added")
            {
                window.location.reload()
            }
        })
        .catch(function (error){
            console.log(error);
        });
        
    } 
    return(
        <>
        <Admin_menu/>
        <div className="h-screen bg-blue-950 ml-[16.66%] pl-5 pt-5">
            <div className=" text-white text-center text-4xl pb-10 flex">Add member</div>
            <table className="text-white w-1/2">
                <tr>
                    <td>Name</td>
                    <td><input type="text" placeholder="Name" className="text-black w-1/2 border p-2 rounded-md mx-auto mb-5"  onChange={(e)=>{setname(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="text" placeholder="Email" className="text-black w-1/2 border p-2 rounded-md mx-auto mb-5"  onChange={(e)=>{setemail(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="text" placeholder="Password" className="text-black w-1/2 border p-2 rounded-md mx-auto mb-5"  onChange={(e)=>{setpassword(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Role</td>
                    <td>
                        <select className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5  h-10"  onChange={(e)=>{setrole(e.target.value)}}>
                            <option selected disabled>select role</option>
                            <option value="fac">fac</option>
                            <option value="rec">rec</option>
                        </select>  
                    </td>
                </tr>
                <tr className="">
                    <td></td>
                    <td>
                        <button type="submit" className="border-2 rounded-md text-white w-44 p-2 " onClick={() => { send_data() }}>submit</button>
                    </td>
                </tr>
            </table>
        </div>
        </>
       
    )
}