import {createSlice} from '@reduxjs/toolkit'
import SidebarState from '../State/Sidebar'

const SidebarReducer = createSlice({
    name:'sidebar',
    initialState: SidebarState,
    reducers:{
        toggleSidebar: (state)=>{
            state.isOpen = !state.isOpen
        }
    }
})


export const {toggleSidebar} = SidebarReducer.actions

export default SidebarReducer.reducer