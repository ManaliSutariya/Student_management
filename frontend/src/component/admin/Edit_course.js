import axios  from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Admin_menu from "./Admin_menu";

export default function Edit_course(){
    var [name,setname] =useState()
    var [languages,setlanguages] =useState([])
    var [description,setdescription] =useState()
    var [duration,setduration] =useState()
    var [fee,setfee] =useState()
    var [all_language,setall_language]= useState([])
    var id=useParams(id);

    useEffect(()=>{
        Header.get(`/admins/view_course/${id.id}`,{

        })
        .then(function (response) {
            setname(response.data.data.name)
            setlanguages(response.data.data.languages)
            setdescription(response.data.data.description)
            setduration(response.data.data.duration)
            setfee(response.data.data.fee)
            console.log(response.data.data)
            
        })
        .catch(function (error){
            console.log(error);
        });

        Header.get(`/admins/view_language`)
        .then(function(response){
            console.log(response.data.data);
            setall_language(response.data.data);
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

    function course_data(){
        console.log(languages)
        Header.post(`/admins/update_course/${id.id}`,{
            name:name,
            languages:languages,
            description:description,
            duration:duration,
            fee:fee
        })
        .then(function (response) {
            alert(response.data.status)
            if (response.data.status == 'update course') {
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
                    <td>languages</td>
                    <td className="flex flex-wrap pb-3" >
                        {
                            all_language.map((e)=>{
                                return(
                                    <>
                                    <div className="flex w-1/2" >
                                        <input type="checkbox" value={e._id} checked={languages.map(lang=>lang.language_id).includes(e._id)} onChange={(a)=>{chack(a,e.duration)}}></input>
                                        <span className="me-">{e.name}</span>
                                    </div>
                                    </>
                                )
                            })
                        }   
                    </td>
                </tr>
                <tr>
                    <td>description</td>
                    <td><input type="text" className="text-black w-1/2 border p-2 rounded-md mx-auto mb-5"  onChange={(e)=>{setdescription(e.target.value)}} value={description}></input></td>
                </tr>
                <tr>
                    <td>duration</td>
                    <td><input type="text" className="text-black w-1/2 border p-2 rounded-md mx-auto mb-5"  onChange={(e)=>{setduration(e.target.value)}} value={duration}></input></td>
                </tr>
                <tr>
                    <td>fee</td>
                    <td><input type="text" className="text-black w-1/2 border p-2 rounded-md mx-auto mb-5"  onChange={(e)=>{setfee(e.target.value)}} value={fee}></input></td>
                </tr>
                <tr className="">
                    <td></td>
                    <td>
                        <button type="submit" className="border-2 rounded-md text-white w-44 p-2 " onClick={()=>{course_data()}}>submit</button>
                    </td>
                </tr>
            </table>
            </div>
        </div>
        </>
    )
}
