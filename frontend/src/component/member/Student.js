import {  useEffect,useState } from "react";
import Header from "../Header";
import Member_menu from "./Member_menu";

export default function Student() {
   var [data,setdata]=useState([])
   
   
   useEffect(() => {
    Header.get(`/members/student_views`,{
      
    })
    .then(function (response) {
        setdata(response.data.data)
        console.log(response.data.data)
        
    })
    .catch(function (error){
        console.log(error);
    });

   
},[])

    function delet(id){
        if(window.confirm("are you sure")){
            localStorage.clear()
            Header.get(`/members/deletes/${id}`,{
        
            })
            .then(function (response) {
                alert(response.data.status)
                console.log(response.data.data)
                if(response.data.status == "deleted")
                {
                    window.location.reload()
                }
                
            })
            .catch(function (error){
                console.log(error);
            });
        }
        }

    return(
        <>
        <Member_menu/>
        <div  className="h-screen bg-blue-950 ml-[16.66%] pt-5 px-5 text-white">
        <table border="1" className="border-2 border-bleck text-center w-full">
           <tr className="border-2 text-black border-black bg-blue-100">
                <td className="pl-3 w-[18%] text-left">Name</td>
                <td className=" w-[18%]">Gender</td>
                <td className=" w-[18%]">Contect</td>
                <td className=" w-[18%]">Facluty Name</td>
                <td>Delete</td>
                <td>Edit</td>
                <td>Profile</td>
           </tr>
            {
                data.map((a,index)=>{
                    return(
                        <>
                            <tr className={" text-blue-950 "+(((index+1)%2==1)?("bg-white "):("bg-blue-100"))}>
                                <td className="pl-3 text-left">{a.firstname} {a.middlename} {a.lastname}</td>
                                <td>{a.gender}</td>
                                <td>{a.contect}</td>
                                <td>{a.faculty_id.name}</td>
                                <td>
                                    <button type="button" onClick={()=>{delet(a._id)}} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                </td>
                                <td>
                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><a href={"/member/Edit_student/"+a._id}>Edit</a></button>
                                </td>
                                <td>
                                <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><a href={"/member/Profile/"+a._id}>Profile</a></button>
                                </td>
                            </tr>
                        </>
                    )
                })
            }
              
        </table>
        </div>
        </>
       
    )
}
