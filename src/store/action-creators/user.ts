import { UserAction } from '../../types/user';
import { Dispatch } from "react"
import { UserActionsTypes } from "../../types/user"
import axios from 'axios';


export const fetchUsers = () => {
    return async (dispatch : Dispatch<UserAction>) => {
       try {
            dispatch({type : UserActionsTypes.FETCH_USERS})
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setTimeout(() => {
                dispatch({type : UserActionsTypes.FETCH_USERS_SUCCESS, payload : response.data})
            },500)
            
       } catch(e) {
             dispatch({type : UserActionsTypes.FETCH_USERS_ERROR, payload : 'Произошла ошибка'})
       }
    }
}