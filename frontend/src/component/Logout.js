export default function Logout(){
    return(
        <>
            <button onClick={()=>{
                if(window.confirm("are you sure")){
                    localStorage.clear()
                    window.location.reload()
                }
            }}>Logout</button>
        </>
    )
}