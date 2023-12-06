import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice' // todoReducer ki j
export const store = configureStore({

    reducer:todoReducer,
    
})

