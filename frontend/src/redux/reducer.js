const INITIAL_STATE = {
    // UI
    title : "" ,
    menu : false,
    logo : false,

    // all
    notifications:[],
    allContents:[],
    showContents:[],
    admContents:[],

    // user
    tasks:[],
    contents:[],
    name: "",  
    points: 0 ,
    emailPartner: "" ,
    email: "" ,

    // modais
    showMenu: true,
    iframe: false,
    iframeUrl: "",
    warning: false,
    warningText: "",
    loading: false,
}

function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case "SET_ALLUSERDATA":
    
            return {
            ...state,
            name: action.value.name,
            points: action.value.points,
            email: action.value.login,
            emailPartner: action.value.userPartner,
            tasks: action.value.tasks,
            notifications: action.value.notifications,
            contents: action.value.contents,
        }





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
        case "SET_ALLCONTENTS":

            return {
                ...state,
                showContents: action.value,
                allContents: action.value
        }
        case "SET_SHOWCONTENTS":

            return {
                ...state,
                showContents: action.value
        }
        case "SET_ADMCONTENTS":

            return {
                ...state,
                admContents: action.value
        }



        case "SET_TASKS":

            return {
                ...state,
                tasks: action.value
        }
        case "SET_CONTENTS":

            return {
                ...state,
                contents: action.value
        }
        case "SET_NAME":

            return {
                ...state,
                name: action.value
        }
        case "SET_POINTS":

            return {
                ...state,
                points: action.value
        }
        case "SET_EMAIL":

            return {
                ...state,
                email: action.value
        }
        case "SET_EMAILPARTNER":

            return {
                ...state,
                emailPartner: action.value
        }



        case "SET_SHOWMENU":
        
            return {
                ...state,
                showMenu: !state.showMenu
        }
        case "SET_IFRAME":

            return {
                ...state,
                iframe: action.value
        }
        case "SET_IFRAMEURL":

            return {
                ...state,
                iframeUrl: action.value
        }
        case "SET_WARNING":

            return {
                ...state,
                warning: action.value
        }
        case "SET_WARNINGTEXT":

            return {
                ...state,
                warningText: action.value
        }
        case "SET_LOADING":

            return {
                ...state,
                loading: action.value
        }


        default:
            return state
    }
    
}

export default reducer;