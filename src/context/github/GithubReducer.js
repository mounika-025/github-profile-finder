const githubReducer=(state,action)=>{
    switch(action.type){
        case 'GET_USERS':
            return{
                ...state,
                user:action.payload,
                loading:false,
            }
        case 'GET_USER':
            return{
                ...state,
                singleUser:action.payload,
                loading:false,
            }  
        case 'GET_REPOS':
            return{
                ...state,
                repos:action.payload,
                loading:false,
            }      
        case 'SET_LOADING':
            return{
                ...state,
                loading:true,
            }   
        case 'CLEAR_USERS' :
            return{
                ...state,
                user:[]
            }    
        default:
            return state
    }

}
export default githubReducer