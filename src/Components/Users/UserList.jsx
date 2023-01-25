import { useEffect,useState } from "react"
import Spinner from "../Layout/Spinner"
import UserCard from "../Users/UserCard"



function UserList(){
    const [user,setUser]=useState()
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        getUser()

    },[])

    const getUser=async()=>{
        const response=await fetch(`https://api.github.com/users`,{
            headers:{
                Authorization: "Bearer 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"
            }
        })
        const data =await response.json()
        console.log(data)
        setUser(data)
        setLoading(false)
    }

    if(!loading){
        return(
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {user.map((eachUser)=>(
                    <UserCard key={eachUser.id} eachUser={eachUser}/>
                ))}
            </div>
        )

    }else{
        return <Spinner/>
    }



    
}

export default UserList