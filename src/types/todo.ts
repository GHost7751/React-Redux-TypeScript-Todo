
export  interface TodoState {
    todos : any[],
    loading: boolean,
    error : string | null,
    page : number,
    limit : number
}

export enum TodoActionType {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SECCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

interface fetchTodoActions {
    type: TodoActionType.FETCH_TODOS
}
interface fetchTodoSuccessActions {
    type: TodoActionType.FETCH_TODOS_SUCCESS,
    payload : any[]
}
interface fetchTodoErrorActions {
    type: TodoActionType.FETCH_TODOS_ERROR,
    payload : string
}
interface SetTodoPage {
    type: TodoActionType.SET_TODO_PAGE,
    payload : number
}


export type TodoAction = fetchTodoActions | fetchTodoSuccessActions | fetchTodoErrorActions | SetTodoPage