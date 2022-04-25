import { IinitialState, UserAction, UserActionsTypes } from "../../types/user"

const initialState : IinitialState = {
    user : [],
    loading : false,
    error : null
}

export const userReducer = (state = initialState,action : UserAction) => {
    switch (action.type){
        case UserActionsTypes.FETCH_USERS:
            return {
                loading:true,
                error : null,
                user : []
            }
        case UserActionsTypes.FETCH_USERS_SUCCESS:
                return {
                    loading:false,
                    error : null,
                    user : action.payload
                }
        case UserActionsTypes.FETCH_USERS_ERROR:
                    return {
                        loading:false,
                        error : action.payload,
                        user : []
                    }
          default : 
           return state  
    }
}