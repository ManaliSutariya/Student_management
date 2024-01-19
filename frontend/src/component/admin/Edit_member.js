import axios  from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Admin_menu from "./Admin_menu";

export default function Edit_member(){
    var [name,setname] =useState()
    var [email,setemail] =useState()
    var [password,setpassword] =useState()
    var id=useParams(id);

    useEffect(()=>{
        Header.get(`/admins/view_fac/${id.id}`,{
      
        })
        .then(function (response) {
            console.log(response.data.data)
            setname(response.data.data.name)
            setemail(response.data.data.email)
            setpassword(response.data.data.password)
            
        })
        .catch(function (error){
            console.log(error);
        });
    

    },[])

    function fac_data(){
        Header.post(`/admins/update/${id.id}`,{
            name:name,
            email:email,
            password:password
        })
        .then(function (response) {
            alert(response.data.status)
            if (response.data.status == 'success') {
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
            <div className=" text-white text-center text-4xl pb-10 flex">Edit Member</div>
            <div className="flex">
            <table className="text-white w-1/2">
                <tr>
                    <td>Name</td>
                    <td><input type="text" className=" text-black w-1/2 border p-2 rounded-md mx-auto mb-5"  onChange={(e)=>{setname(e.target.value)}} value={name}></input></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="text" className=" text-black w-1/2 border p-2 rounded-md mx-auto mb-5" onChange={(e)=>{setemail(e.target.value)}} value={email}></input></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="text" className="text-black w-1/2 border p-2 rounded-md mx-auto mb-5"  onChange={(e)=>{setpassword(e.target.value)}} value={password}></input></td>
                </tr>
                <tr className="">
                    <td></td>
                    <td>
                        <button type="submit" className="border-2 rounded-md text-white w-44 p-2 " onClick={()=>{fac_data()}}>submit</button>
                    </td>
                </tr>
            </table>
            </div>
        </div>
        </>
    )
}
