import axios from "axios";
import { PiStudentFill } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { BiLogoDiscourse } from "react-icons/bi";
import { PiStudent } from "react-icons/pi";
import Logout from '../Logout';
import { FiLogOut } from "react-icons/fi";

export default function Admin_menu(){
    return(
        <>
            <div className="bg-white w-1/6 h-screen fixed top-0 left-0 rounded-md">
                 <div>
                    <div className="flex text-blue-950 font-bold m-auto w-fit my-3">
                        <div className="text-5xl"><PiStudentFill /></div>
                        <span className="text-2xl m-auto">EDAMIN</span>
                    </div>
                </div> 
                <div className="">
                    <a href="/admin/member_view" className="w-full text-blue-950 hover:bg-blue-950 hover:text-white p-3 text-xl border-blue-950 border-y-2 flex items-center"><IoMdHome className="me-2"/>All Member</a>
                    <a href="/admin/student_view" className="w-full text-blue-950 hover:bg-blue-950 hover:text-white p-3 text-xl border-blue-950 border-b-2 flex items-center"><PiStudent className="me-2"/>All Student</a>
                    <a href="/admin/member_register" className="w-full text-blue-950 hover:bg-blue-950 hover:text-white p-3 text-xl border-blue-950 border-b-2 flex items-center"><MdModeEditOutline className="me-2"/>Register Member</a>
                    <a href="/admin/add_languages" className="w-full text-blue-950 hover:bg-blue-950 hover:text-white p-3 text-xl border-blue-950 border-b-2 flex items-center"><IoLanguage className="me-2"/>Add Languages</a>
                    <a href="/admin/add_course" className="w-full text-blue-950 hover:bg-blue-950 hover:text-white p-3 text-xl border-blue-950 border-b-2 flex items-center"><BiLogoDiscourse className="me-2"/>Add Course</a>
                    <div className="text-blue-950  hover:bg-blue-950 hover:text-white p-3 text-xl border-blue-950 border-b-2 flex items-center"><FiLogOut className="me-2"/><Logout/></div>
                </div>  
                
            </div>
            
        </>
    )
}