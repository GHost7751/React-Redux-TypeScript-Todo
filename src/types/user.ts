
export interface IinitialState{
    user : any[],
    loading : boolean,
    error : null | string
} 

export enum UserActionsTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export interface FetchUsersAction {
    type: UserActionsTypes.FETCH_USERS,    
}
interface FetchUsersSuccessAction {
    type: UserActionsTypes.FETCH_USERS_SUCCESS,
    payload: any[]    
}
interface FetchUsersErrorAction {
    type: UserActionsTypes.FETCH_USERS_ERROR,
    payload : string    
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction