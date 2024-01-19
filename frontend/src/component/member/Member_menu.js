import { PiStudentFill } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import Logout from "../Logout";

export default function Member_menu(){
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
                    <a href="/member/view_student" className="w-full text-blue-950 hover:bg-blue-950 hover:text-white p-3 text-xl border-blue-950 border-y-2 flex items-center"><IoMdHome className="me-2"/>All student</a>
                    <a href="/member/student_register" className="w-full text-blue-950 hover:bg-blue-950 hover:text-white p-3 text-xl border-blue-950 border-b-2 flex items-center "><MdModeEditOutline className="me-2"/>Register Student</a>
                    <a href="/member/Pending_fee" className="w-full text-blue-950 hover:bg-blue-950 hover:text-white p-3 text-xl border-blue-950 border-b-2 flex items-center "><MdOutlinePending className="me-2"/>Pending Fee</a>
                    <div className="text-blue-950  hover:bg-blue-950 hover:text-white p-3 text-xl border-blue-950 border-b-2 flex items-center"><FiLogOut className="me-2"/><Logout/></div>
                </div>  
            </div>
            
        </>
    )
}