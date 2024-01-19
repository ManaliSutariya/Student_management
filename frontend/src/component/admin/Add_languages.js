import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header";
import Admin_menu from "./Admin_menu";
import { useParams } from "react-router-dom";

export default function Add_languages(){
    var [name,setname] = useState()
    var [description,setdescription] = useState()
    var [duration,setduration] = useState()
    var [fee,setfee] = useState()
    var [data,setdata]=useState([])
    var [language,setlanguage]=useState([])
    var [edit_check,setedit_check]=useState(false)
    var [update,setupdate]=useState()
    var id= useParams(id);

    function send_data() {
    if(!edit_check)
    {
        Header.post('/admins/add_language',{
            name:name,
            duration:duration,
            description:description
        },
        
        )
        .then(function (response) {
            // handle success
            alert(response.data.status)
            if(response.data.status=="language added")
            {
                refresh();
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    else{
        Header.post(`/admins/update_language/${update}`,{
            name:name,
            duration:duration,
            description:description
        })
        .then(function(response){
            
            alert(response.data.status);
            if(response.data.stautu=="update language")
            {
                setedit_check(false)

            }
        })
        .catch(function(error){
            console.log(error);
        })
        
    }
    } 


    function delet(id){
        if(window.confirm("are you sure")){
            localStorage.clear()
            // window.location.reload()
            Header.get(`/admins/delete_language/${id}`,{
           
            })
            .then(function(response){
                alert(response.data.status)
                console.log(response.data.data)
                if(response.data.status == "delete language")
                {
                    window.location.reload()
                }
            })
            .catch(function(error){
                console.log(error);
            });     
        }
       
    
    }


    useEffect(()=>{
    Header.get('/admins/view_language',{
        
    })
    .then(function (response) {
        // handle success
        console.log(response.data.data)
        setlanguage(response.data.data)

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    },[])
    
    function refresh(){
        setname("");
        setduration("");
        setdescription("");
    }

    return(
        <>
        <Admin_menu/>
        <div className="h-screen bg-blue-950 ml-[16.66%] pl-5 pt-5">
            <div className=" text-white text-center text-4xl pb-10 flex">Add Language</div>
            <div className="flex">
            <table className="text-white w-1/2">
                <tr>
                    <td>Name</td>
                    <td><input type="text" placeholder="Name" value={name} className=" text-black w-1/2 border p-2 rounded-md mx-auto mb-5"  onChange={(e)=>{setname(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Duration</td>
                    <td><input type="text" placeholder="Duration" value={duration} className=" text-black w-1/2 border p-2 rounded-md mx-auto mb-5" onChange={(e)=>{setduration(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td><input type="text" placeholder="Description" className="text-black w-1/2 border p-2 rounded-md mx-auto mb-5" value={description} onChange={(e)=>{setdescription(e.target.value)}}></input></td>
                </tr>
                <tr className="">
                    <td></td>
                    <td>
                        <button type="submit" className="border-2 rounded-md text-white w-44 p-2 " onClick={() => { send_data() }}>submit</button>
                    </td>
                </tr>
            </table>

            <div>
                <table>
                <tr className="text-white">
                        <td className="border p-2">Name</td>
                        <td className="border p-2">Duration</td>
                        <td className="border p-2">Edit</td>
                        <td className="border p-2">Delete</td>
                    </tr>
                    {
                        language.map((e)=>{
                            return(
                                <>
                                <tr>
                                    <td className="text-white border p-2">{e.name}</td>
                                    <td className="text-white border p-2">{e.duration}</td>
                                    <td className="border">
                                        <button type="button" onClick={()=>{
                                            setname(e.name);
                                            setduration(e.duration);
                                            setdescription(e.description);
                                            setedit_check(true);
                                            setupdate(e._id);
                                        }} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
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
