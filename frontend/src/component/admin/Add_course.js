import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header";
import Admin_menu from "./Admin_menu";

export default function Add_course(){
    var [name,setname] = useState()
    var [languages,setlanguages] = useState([])
    var [description,setdescription] = useState()
    var [duration,setduration] = useState(0)
    var [course,setcourse] = useState([])
    var [all_language,setall_language] = useState([])
    var [fee,setfee] = useState()
    
    useEffect(()=>{
        Header.get(`/admins/view_language`)
        .then(function(response){
            console.log(response.data.data);
            setall_language(response.data.data);
        })
        .catch(function (error){
            console.log(error);
        });

        Header.get(`/admins/views_course`)
        .then(function (response) {
            setcourse(response.data.data)
            console.log(response.data.data)
            
        })
        .catch(function (error){
            console.log(error);
        });
    },[])

     function chack(e,dura){
        var temp=languages;

        if(e.target.checked)
        {
            setduration(duration+dura)
            temp.push({language_id:e.target.value});
            setlanguages(temp);
        }
        else{
            
            setduration(duration-dura)
            temp=temp.filter((a)=>({language_id:e.target.value})!=a)
            setlanguages(temp);
            console.log(languages)
        }
     } 
     
    function delet(id){
        if(window.confirm("are you sure")){
            localStorage.clear()
            Header.get(`/admins/delete_course/${id}`,{

            })
            .then(function(response){
                alert(response.data.status)
                console.log(response.data.data)
                if(response.data.status == "delete course")
                {
                    window.location.reload()
                }
            })
            .catch(function(error){
                console.log(error);
            });
        }
    }

    function send_data() {
        console.log(duration)
        console.log(languages)
    Header.post('/admins/add_course',{
        name: name,
        languages:languages,
        duration:duration,
        description:description,
        fee:fee
    })
    .then(function (response) {
        // handle success
        alert(response.data.status)
        if(response.data.status=="add course")
        {
            refresh();
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    }

    function refresh(){
        setname("");
        setlanguages([]);
        setdescription("");
        setduration(0);
        setfee("");
    }

    return(
        <>
        <Admin_menu/>
        <div className="h-screen bg-blue-950 ml-[16.66%] pl-5 pt-5">
           <div className=" text-white text-center text-4xl pb-10 flex">Add Coures</div>
           <div className="flex">
            <table className="text-white w-1/2">
                <tr>
                    <td>Name</td>
                    <td><input type="text" placeholder="Name" className=" text-black w-1/2 border p-2 rounded-md mx-auto mb-5"  onChange={(e)=>{setname(e.target.value)}} value={name}></input></td>
                </tr>
                <tr>
                    <td className="">Languages</td>
                    <td className="flex flex-wrap pb-3" >
                    {
                        all_language.map((e)=>{
                            return(
                                <>
                                <div className="flex w-1/2" >
                                    <input type="checkbox" value={e._id}   onChange={(a)=>{chack(a,e.duration)}}></input>
                                    <span className="me-">{e.name}</span>
                                </div>
                                </>
                            )
                        })
                    }   
                    </td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td> <input type="text" placeholder="Description" className=" text-black w-1/2 border p-2 rounded-md mx-auto mb-5" onChange={(e)=>{setdescription(e.target.value)}} value={description}></input></td>
                </tr>
                <tr>
                    <td>Fee</td>
                    <td><input type="text" placeholder="Fee" className=" text-black w-1/2 border p-2 rounded-md mx-auto mb-5" onChange={(e)=>{setfee(e.target.value)}} value={fee}></input></td>
                </tr>
                <tr className="">
                    <td></td>
                    <td>
                        <button type="submit" className="border-2 rounded-md text-white w-44 p-2 " onClick={() => { send_data() }}>submit</button>
                    </td>
                </tr>
            </table>

            <div className="">
               <table>
                <tr className="text-white">
                        <td className="border p-2">Name</td>
                        <td className="border p-2">Duration</td>
                        <td className="border p-2">Fee</td>
                        <td className="border p-2">Edit</td>
                        <td className="border p-2">Delete</td>
                    </tr>
                    {
                        course.map((e)=>{
                            return(
                                <>
                                <tr>
                                    <td className="text-white border p-2">{e.name}</td>
                                    <td className="text-white border p-2">{e.duration}</td>
                                    <td className="text-white border p-2">{e.fee}</td>
                                    <td className="text-white border p-2">
                                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><a href={"/admin/Edit_course/"+e._id}>Edit</a></button>
                                    </td>
                                    <td className="border">
                                        <button type="button" onClick={()=>{delet(e._id)}} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Delete</button>
                                    </td>
                                </tr>
                                </>
                            )
                        })
                    }   
                </table>
            </div>
           </div>
        </div>

        </>
    )
}
