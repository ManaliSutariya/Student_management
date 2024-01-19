import './App.css';


import {Routes,Route, Navigate} from "react-router-dom";
import Admin_login from './component/admin/Admin_login';
import Member_register from './component/admin/Member_register';
import Add_course from './component/admin/Add_course';
import Add_languages from './component/admin/Add_languages';
import Member_login from './component/member/Member_login';
import Student_register from './component/member/Student_register';
import Student from './component/member/Student';
import Profile from './component/member/Profile';
import Edit_student from './component/member/Edit_student';
import Add_fee from './component/member/Add_fee';
import Student_view from './component/admin/Student_view';
import Edit_member from './component/admin/Edit_member';
import Edit_course from './component/admin/Edit_course';
import Member_view from './component/admin/Member_view';
import Pending_fee from './component/member/Pending_fee';
import Unauthorized from './component/Unauthorized';
import Profiles from './component/admin/Profiles';

function login_check(){
  if(localStorage.getItem('authorization')==undefined)
  {
    return false;
  }
  else{
    return true;
  }
}

function role_check(role){
  if(localStorage.getItem("role")==role)
  {
    return true;
  }
  else{
    return false;
  }
}

function App() {
  return (
    <>
    <Routes>
      
      <Route path="/admin/login" element={ (!login_check())?<Admin_login/>:<Navigate to="/admin/member_view"/>}></Route>
      <Route path="/admin/member_register" element={ (login_check())?(role_check("admin"))?<Member_register/>:<Unauthorized/>:<Navigate to="/admin/login"/>}></Route>
      <Route path="/admin/add_course" element={ (login_check())?(role_check("admin"))?<Add_course/>:<Unauthorized/>:<Navigate to ="/admin/login"/>}></Route>
      <Route path="/admin/add_languages" element={ (login_check())?(role_check("admin"))?<Add_languages/>:<Unauthorized/>:<Navigate to="/admin/login"/> }></Route>
      <Route path="/admin/student_view" element={ (login_check())?(role_check("admin"))?<Student_view/>:<Unauthorized/>:<Navigate to="/admin/login"/>}></Route>
      <Route path="/admin/profiles/:id" element={ (login_check())?(role_check("admin"))?<Profiles/>:<Unauthorized/>:<Navigate to="/admin/login"/>}></Route>
      <Route path="/admin/member_view" element={ (login_check())?(role_check("admin"))?<Member_view/>:<Unauthorized/>:<Navigate to="/admin/login"/>}></Route>
      <Route path="/admin/edit_member/:id" element={ (login_check())?(role_check("admin"))?<Edit_member/>:<Unauthorized/>:<Navigate to="/admin/login"/>}></Route>
      <Route path="/admin/edit_course/:id" element={ (login_check())?(role_check("admin"))?<Edit_course/>:<Unauthorized/>:<Navigate to="/admin/login"/>}></Route>
      <Route path="/" element={ (!login_check())?<Member_login/>:<Navigate to="/member/view_student"/>}></Route>
      <Route path="/member/student_register" element={ (login_check())?(role_check("member"))?<Student_register/>:<Unauthorized/>:<Navigate to="/"/>}></Route>
      <Route path="/member/view_student" element={ (login_check())?(role_check("member"))?<Student/>:<Unauthorized/>:<Navigate to="/"/>}></Route>
      <Route path="/member/Profile/:id" element={ (login_check())?(role_check("member"))?<Profile/>:<Unauthorized/>:<Navigate to="/"/>}></Route>
      <Route path="/member/Edit_student/:id" element={ (login_check())?(role_check("member"))?<Edit_student/>:<Unauthorized/>:<Navigate to="/"/>}></Route>
      <Route path="/member/Add_fee/:id" element={ (login_check())?(role_check("member"))?<Add_fee/>:<Unauthorized/>:<Navigate to="/"/>}></Route>
      <Route path="/member/Pending_fee" element={ (login_check())?(role_check("member"))?<Pending_fee/>:<Unauthorized/>:<Navigate to="/"/>}></Route>
    </Routes>
   </>
  );
}

export default App;

