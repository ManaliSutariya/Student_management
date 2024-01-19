import {  useEffect,useState } from "react";
import Header from "../Header";
import Admin_menu from "./Admin_menu";

export default function Member_view() {
   var [data,setdata]=useState([])
   
   
   useEffect(() => {
    Header.get(`/admins/views`,{
      
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
            Header.get(`/members/delete_student/${id}`,{
        
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
        <Admin_menu/>
        <div className="h-screen bg-blue-950 ml-[16.66%] pt-5 px-5 text-white">
            <table className="border-2 border-black text-center w-full">
                <tr className="border-2 border-black bg-blue-100 text-black">
                    <td className="pl3 w-[18%] text-left">Name</td>
                    <td className="pl3 w-[18%] ">Email</td>
                    <td className="pl3 w-[18%] ">Password</td>
                    <td>Delete</td>
                    <td>Edit</td>
                </tr>
                {
                    data.map((a,index)=>{
                        return(
                            <>
                                <tr className={"text-blue-950 "+(((index+1)%2==1)?("bg-white"):("bg-blue-100"))}>
                                    <td className="pl-3 text-left">{a.name}</td>
                                    <td>{a.email}</td>
                                    <td>{a.password}</td>
                                    <td>
                                        <button type="button" onClick={()=>{delet(a._id)}} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                    </td>
                                    <td>
                                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><a href={"/admin/edit_member/"+a._id}>Edit</a></button>
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
