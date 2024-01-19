import axios  from "axios";
import { useEffect,useState } from "react";
import Header from "../Header";
import Member_menu from "./Member_menu";

export default function Student_register(){
    var [firstname,setfirstname]=useState()
    var [middlename,setmiddlename]=useState()
    var [lastname,setlastname]=useState()
    var [gender,setgender]=useState()
    var [faculty_id,setfaculty_id]=useState()
    var [contect,setcontect]=useState()
    var [address,setaddress]=useState()
    var [course_name,setcourse_name]=useState()
    var [pc_no,setpc_no]=useState()
    var [fee_stu,setfee_stu]=useState([])
    var [data,setdata] =useState([])
    var [faculty,setfaculty] =useState([])
    var [visible,setvisible] =useState(true)

    useEffect(() => {
        Header.get('/members/views_course',{
          
        })
        .then(function (response) {
            setdata(response.data.data)
            console.log(response.data.data)
            
        })
        .catch(function (error){
            console.log(error);
        });
        
        Header.get('/members/member_views',{
          
        })
        .then(function (response) {
            setfaculty(response.data.data)
            console.log(response.data.data)
            
        })
        .catch(function (error){
            console.log(error);
        });
    },[visible])



    function student_data(){
        console.log(course_name)
        Header.post('/members/register',{
            firstname:firstname,
            middlename:middlename,
            lastname:lastname,
            gender:gender,
            faculty_id:faculty_id,
            contect:contect,
            address:address,
            course_name:course_name,
            pc_no:pc_no,
            installment:fee_stu
        })
        .then(function (response) {
            alert(response.data.status)
            if(response.data.status == "add student")
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
        <Member_menu />
        <div className="h-screen bg-blue-950 ml-[16.66%] pl-5 pt-5">
            <div className=" text-white text-center text-4xl pb-10 flex">Add student</div>
            <table className="text-white w-1/3">
                <tr>
                    <td>First Name</td>
                    <td><input type="text" placeholder="First Name" className="text-black border p-1 rounded-md mx-auto mb-5 w-full"  onChange={(e)=>{setfirstname(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Middle Name</td>
                    <td><input type="text" placeholder="Middle Name" className="text-black border p-1 rounded-md mx-auto mb-5 w-full"  onChange={(e)=>{setmiddlename(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td><input type="text" placeholder="Last Name" className="text-black border p-1 rounded-md mx-auto mb-5 w-full"  onChange={(e)=>{setlastname(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td className="flex "> 
                        <div className="pr-5"><input type="radio" className="mr-2"  onChange={()=>{setgender("female")}} name="gender"></input>female</div>
                        <div><input type="radio" className="mr-2" onChange={()=>{setgender("male")}} name="gender"></input>male</div>
                    </td>
                </tr>
                <tr>
                    <td>Faculty Name</td>
                    <td>
                        <select className="text-black border p-1 rounded-md mx-auto mb-5 w-full" onChange={(e)=>{setfaculty_id(e.target.value)}}>
                            <option selected disabled>select Faculty</option>
                            {
                                faculty.map((a)=>{
                                    return(
                                        <>
                                            <option value={a._id}>{a.name}</option>
                                        </>
                                    )
                                })
                            }
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Contect</td>
                    <td><input type="text" placeholder="Contect" className="text-black border p-1 rounded-md mx-auto mb-5 w-full"  onChange={(e)=>{setcontect(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td><input type="text" placeholder="Address" className="text-black border p-1 rounded-md mx-auto mb-5 w-full"  onChange={(e)=>{setaddress(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Coures</td>
                    <td>
                        <select className="text-black border p-1 rounded-md mx-auto mb-5 w-full" onChange={(e)=>{setcourse_name(e.target.value)}}>
                            <option selected disabled>select Coures</option>
                            {
                                data.map((a)=>{
                                    return(
                                        <>
                                            <option value={a._id}>{a.name}</option>
                                        </>
                                    )
                                })
                            }
                        </select>  
                    </td>
                </tr>
                <tr>
                    <td className="flex">
                        <div className="pr-3"><input type="radio" className="mr-2" onChange={(e)=>{setvisible(false)}} name="pc"></input>Pc</div>
                        <div><input type="radio" className="mr-2" onChange={()=>{setpc_no("laptop");setvisible(true)}} name="pc"></input>Laptop</div>
                    </td>
                    <td>
                        <input type="number" placeholder="pc_no." className={"text-black border p-1 rounded-md mx-auto mb-5 w-full "} disabled={visible}  onChange={(e)=>{setpc_no(e.target.value)}}></input>
                    </td>
                </tr>
                <tr>
                    <td>Installment</td>
                    <td><input type="text" placeholder="Installment" className="text-black border p-1 rounded-md mx-auto mb-5 w-full"  onChange={(e)=>{setfee_stu(e.target.value)}}></input></td>
                </tr>
                <tr className="">
                    <td></td>
                    <td>
                        <button type="submit" className="border-2 rounded-md text-white w-44 p-2 " onClick={()=>{student_data()}}>submit</button>
                    </td>
                </tr>
            </table>
        </div>
        </>
    )
}
