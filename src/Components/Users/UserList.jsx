import { useContext } from "react"
import Spinner from "../Layout/Spinner"
import UserCard from "../Users/UserCard"
import GithubContext from "../../context/github/GithubContext"



function UserList(){
    const {user,loading}=useContext(GithubContext)


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