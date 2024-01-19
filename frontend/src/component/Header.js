import axios from "axios";

const Header=axios.create({
    baseURL:"http://localhost:4000",
    headers:{
        "authorization":localStorage.getItem("authorization")
    }
})

export default Header