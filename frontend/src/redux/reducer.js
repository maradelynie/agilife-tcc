const INITIAL_STATE = {
    title : "" ,
    menu : false,
    logo : false,
    notifications:[],
    tasks:[],
    name: "User"  
}

function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case "SET_LOGO":
            
        return {
            ...state,
            logo: action.value
        }
        case "SET_TITLE":
            
            return {
                ...state,
                title: action.value
            }
        case "SET_MENU":
        
            return {
                ...state,
                menu: action.value
            }
        case "SET_NOTIFICATIONS":
    
            return {
                ...state,
                notifications: action.value
            }
        case "SET_TASKS":

            return {
                ...state,
                tasks: action.value
            }
        default:
            return state
    }
    
}

export default reducer;