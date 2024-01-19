import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Member_menu from "./Member_menu";

export default function Add_fee() {
    var [data, setdata] = useState([])
    var [fee, setfee] = useState([])
    var id = useParams(id)
    useEffect(() => {
        console.log(id)
        Header.get(`/members/view/${id.id}`)
            .then(function (response) {
                setdata(response.data.data)
                setfee(response.data.data.fee_stu)
                console.log(response.data.data)

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    function paid() {
        if(window.confirm('are you sure you want to pay')){
            Header.get(`members/paidfee/${id.id}`, {
            
            })
                .then(function (response) {
                    console.log(response.data.status);
                    if (response.data.status == 'paid fee') {
                        window.location.reload()
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
       
    }
    return (
        <>
            <Member_menu />
            <div className="h-screen bg-blue-950 ml-[16.66%] pl-3 pt-2 flex">
            <div className=" ">
                <div className=" text-white text-center text-4xl pb-10 flex"></div>
                    <table className="text-white ">
                        <tr>
                            <td>First Name</td>
                            <td><input type="text" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" value={data.firstname}></input></td>
                        </tr>
                        <tr>
                            <td>Middle Name</td>
                            <td><input type="text" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" value={data.middlename}></input></td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td><input type="text" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" value={data.lastname}></input></td>
                        </tr>
                        <tr>
                            <td>Facluty Name</td>
                            <td><input type="text" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" value={data.faculty_id ? data.faculty_id.name : ""}></input></td>
                        </tr>
                        <tr>
                            <td>Contect</td>
                            <td><input type="number" className="text-black w-1/2 border p-1 rounded-md mx-auto mb-5" value={data.contect}></input></td>
                        </tr>
                    </table>
                </div>
               <div>
               <table className="border-2 border-white text-white">
                    {
                        fee.map((e,index) => {
                            return (
                                <>
                                    <tr >
                                        <td className="border-2 border-white">{e[0]}</td>
                                        <td className="border-2 border-white">{e[1]}</td>
                                        <td className="border-2 border-white">{e[2]}</td>
                                        <td className=" border-2 border-white">
                                            <button type="button" onClick={()=>{paid(id.id)}} className={"text-white rounded py-1 px-4 m-1 "+((e[1]=="paid")? "bg-green-700":"bg-red-700")} >Paid</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </table>
               </div>
            </div>

        </>
    )
}