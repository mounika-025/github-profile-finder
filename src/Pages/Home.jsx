import UserList from "../Components/Users/UserList"

function Home(){
    return(
        <div>
            <h1 className="text-5xl mb-2">Hello!</h1>
            {/* {user} */}
            <UserList/>


        </div>
    )
}
export default Home