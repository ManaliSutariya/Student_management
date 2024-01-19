import {  useEffect,useState } from "react";
import Header from "../Header";
import Admin_menu from "./Admin_menu";

export default function Student_view() {
   var [data,setdata]=useState([])
   
   
   useEffect(() => {
    Header.get(`/admins/view_student`,{
      
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
        <Admin_menu/>
        <div  className="h-screen bg-blue-950 ml-[16.66%] pt-5 px-5 text-white">
        <table border="1" className="border-2 border-bleck text-center w-full">
           <tr className="border-2 border-black bg-blue-100 text-black">
                <td className="pl-3 w-[18%] text-left">Name</td>
                <td className=" w-[18%]">Gender</td>
                <td className=" w-[18%]">Contect</td>
                <td className=" w-[18%]">Facluty Name</td>
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
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><a href={"/admin/profiles/"+a._id}>Profile</a></button>
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
