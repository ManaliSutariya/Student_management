import axios  from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Member_menu from "./Member_menu";

export default function Edit_student(){
    var [firstname,setfirstname]=useState()
    var [middlename,setmiddlename]=useState()
    var [lastname,setlastname]=useState()
    var [gender,setgender]=useState()
    var [faculty_id,setfaculty_id]=useState()
    var [contect,setcontect]=useState()
    var [address,setaddress]=useState()
    var [course_name,setcourse_name]=useState()
    var [pc_no,setpc_no]=useState()
    var [courses,setcourses]=useState([])
    var [data,setdata] =useState([])
    var [visible,setvisible] =useState(true)
    var id=useParams(id);

    useEffect(()=>{
        Header.get(`/members/view/${id.id}`,{
      
        })
        .then(function (response) {
            console.log(response.data.data)
            setfirstname(response.data.data.firstname)
            setmiddlename(response.data.data.middlename)
            setlastname(response.data.data.lastname)
            setgender(response.data.data.gender)
            setfaculty_id(response.data.data.faculty_id)
            setcontect(response.data.data.contect)
            setaddress(response.data.data.address)
            setcourse_name(response.data.data.course_name.name)
            setpc_no(response.data.data.pc_no)
        })
        .catch(function (error){
            console.log(error);
        });
        Header.get('/members/member_views',{
        })
        .then(function (response) {
            setdata(response.data.data)
            console.log(response.data.data)
            
        })
        .catch(function (error){
            console.log(error);
        });

        Header.get('/members/views_course',{
          
        })
        .then(function (response) {
            setcourses(response.data.data)
            console.log(response.data.data)
            
        })
        .catch(function (error){
            console.log(error);
        });

    },[])

    function student_data(){
        Header.post(`/members/update/${id.id}`,{
            firstname:firstname,
            middlename:middlename,
            lastname:lastname,
            gender:gender,
            faculty_id:faculty_id,
            contect:contect,
            address:address,
            course_name:course_name,
            pc_no:pc_no,
        })
        .then(function (response) {
            alert(response.data.status)
            if (response.data.status == 'view updated') {
                window.location.reload()
            }
        })
        .catch(function (error){
            console.log(error);
        });
    }
    return(
        <>
        <Member_menu/>
        <div className="h-screen bg-blue-950 ml-[16.66%] pl-5 pt-5">
            <div className=" text-white text-center text-4xl pb-10 flex">Edit Student</div>
            <table className="text-white w-1/2">
                <tr>
                    <td>First Name</td>
                    <td><input type="text" placeholder="First Name" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5"  onChange={(e)=>{setfirstname(e.target.value)}} value={firstname}></input></td>
                </tr>
                <tr>
                    <td>Middle Name</td>
                    <td><input type="text" placeholder="Middle Name" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" onChange={(e)=>{setmiddlename(e.target.value)}} value={middlename}></input></td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td><input type="text" placeholder="Last Name" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5"  onChange={(e)=>{setlastname(e.target.value)}} value={lastname}></input></td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>
                        <div className="pr-5"><input type="radio" checked={(gender=="female")?true:false} className="mr-2"  onChange={()=>{setgender("female")}} name="gender"></input>female</div>
                        <div><input type="radio" className="mr-2" checked={(gender=="male")?true:false} onChange={()=>{setgender("male")}} name="gender"></input>male</div>
                    </td>
                </tr>
                <tr>
                    <td>Facluty Name</td>
                    <td>
                    <select value={faculty_id} className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" onChange={(e)=>{setfaculty_id(e.target.value)}} >
                        <option selected disabled>select</option>
                            {
                                data.map((a)=>{
                                    return(
                                        <>
                                            {(a.role=='fac')?<option value={a._id}>{a.name}</option>:''}
                                        </>
                                    )
                                })
                            }
                    </select>
                    </td>
                </tr>
                <tr>
                    <td>Contect</td>
                    <td><input type="number" placeholder="Contect" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" onChange={(e)=>{setcontect(e.target.value)}} value={contect}></input></td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td><input type="text" placeholder="Address" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" onChange={(e)=>{setaddress(e.target.value)}} value={address}></input></td>
                </tr>
                <tr>
                    <td>Coures</td>
                    <td>
                        <select className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" onChange={(e)=>{setcourse_name(e.target.value)}} value={course_name}>
                            <option selected disabled>select Coures</option>
                            {
                                courses.map((a)=>{
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
                        <div className="pr-3"><input type="radio" checked={(pc_no!="laptop")?true:false} className="mr-2" onChange={(e)=>{setvisible(false)}} name="pc"></input>Pc</div>
                        <div><input type="radio" className="mr-2" checked={(pc_no=="laptop")?true:false} onChange={()=>{setpc_no("laptop");setvisible(true)}} name="pc"></input>Laptop</div>
                    </td>
                    <td>
                        <input type="number" placeholder="pc_no." className={"text-black border p-1 rounded-md mx-auto mb-5 w-1/2 "} disabled={visible}  onChange={(e)=>{setpc_no(e.target.value)}}></input>
                    </td>
                </tr>
                <tr className="">
                    <td></td>
                    <td>
                        <button type="submit" className="border-2 rounded-md  w-44 p-2 " onClick={()=>{student_data()}}>submit</button>
                    </td>
                </tr>
            </table>
        </div>
        </>
    )
}
