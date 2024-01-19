import axios from "axios";
import { useState } from "react";
import Header from "../Header";
import { FaEyeSlash,FaEye} from "react-icons/fa";



export default function Admin_login() {
    var [email, setemail] = useState()
    var [password, setpassword] = useState()
    var [visible, setvisible] = useState(false)
    function send_data() {
        Header.post('/admins/', {
            email: email,
            password: password
        })
            .then(function (response) {
                if (response.data.status == "login successfull") {
                    localStorage.setItem('authorization', response.data.token)
                    localStorage.setItem('role', "admin")
                    window.location.href = "/admin/member_view"
                   
                }
                else {
                    alert("check your email and password")
                }
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    return (
            <div className="h-screen bg-blue-950 pt-32">
                <div className="border-4 w-1/3 mx-auto  bg-blue-950 flex flex-col py-12">
                    <div className=" text-white text-center text-5xl pb-10">Admin Login</div>
                    <input type="text" placeholder="Email" className=" w-1/2 border p-2 rounded-md mx-auto mb-5" onChange={(e) => { setemail(e.target.value) }}></input>
                   <div className="flex w-1/2 relative mx-auto"> <input placeholder="Password" type={(visible) ? 'text' : 'password'} className=" p-2 rounded-md w-full mb-5" onChange={(e) => { setpassword(e.target.value) }}></input><div className=" absolute right-2 top-3 text-black">{visible?<FaEye onClick={() => { setvisible(false)}}/>:< FaEyeSlash  onClick={() => { setvisible(true)}} />}</div></div>
                    <button type="submit" className="border-2 rounded-md text-white w-1/2 p-2 m-auto " onClick={() => { send_data() }}>submit</button>
                    <a className="text-white m-auto pt-2" href={"/"}>Member ?</a>
                </div>
            </div>
        

    )
}