import { createSlice } from '@reduxjs/toolkit'
import SearchState from '../State/Search'

const SearchReducer = createSlice({
    name:'search',
    initialState: SearchState,
    reducers:{
        toggleSearch:(state)=>{
            state.isVisible = !state.isVisible
        }
    }
})

export const {toggleSearch} = SearchReducer.actions;

export default SearchReducer.reducer