import { configureStore } from '@reduxjs/toolkit'
import SearchReducer from './Reducers/Search'
import SidebarReducer from './Reducers/Sidebar'

export const store = configureStore({
    reducer:{
        search: SearchReducer,
        sidebar: SidebarReducer
    }
})