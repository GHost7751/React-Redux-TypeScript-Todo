import { todoReducer } from './todoReducer';

import { userReducer } from './userReducer';
import {combineReducers} from 'redux'


export const rootReducers = combineReducers({
    user : userReducer,
    todo : todoReducer
})

export type RootState = ReturnType<typeof rootReducers>