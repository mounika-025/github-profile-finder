import { createContext,useReducer } from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext()






export const GithubProvider =({children})=>{
    const initial={
        user:[],
        singleUser:{},
        repos:[],
        loading:false,
    }

    const[state,dispatch]=useReducer(githubReducer,initial)

    //get users

    const searchUser=async(text)=>{
        setLoading()

        const param=new URLSearchParams({
            q:text
        })

        const response=await fetch(`https://api.github.com/search/users?${param}`,{
            headers:{
                Authorization: "Bearer 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"
            }
        })
        const {items} =await response.json()
        
        
        dispatch({

            type: 'GET_USERS',
            payload:items,
        })
    }

// single user
    const getUser=async(login)=>{
        setLoading()

        

        const response=await fetch(`https://api.github.com/users/${login}`,{
            headers:{
                Authorization: "Bearer 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"
            }
        })


        if(response.status=== 404){
            window.location='/notfound'
        }else{
            const data =await response.json()
        
        
        dispatch({

            type: 'GET_USER',
            payload:data,
        })

        }
        
    }
//get repos

const getRepos=async(login)=>{
    setLoading()



    const response=await fetch(`https://api.github.com/users/${login}/repos`,{
        headers:{
            Authorization: "Bearer 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"
        }
    })
    const data =await response.json()
    
    
    dispatch({

        type: 'GET_REPOS',
        payload:data,
    })
}
    const clearUser=()=> dispatch({type:'CLEAR_USERS'})



    //set loading
     const setLoading=()=>dispatch({type:'SET_LOADING'})

    return <GithubContext.Provider value={{
        user:state.user,
        singleUser:state.singleUser,
        repos:state.repos,
        loading:state.loading,
        searchUser,
        clearUser,
        getUser,
        getRepos,
    }}>
        {children}
    </GithubContext.Provider>


}

export default GithubContext