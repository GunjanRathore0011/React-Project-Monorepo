import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

export const fetchData = createAsyncThunk('fetchData',async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=10')
    return response.data;
})

export const todoSlice= createSlice({
    name: 'todo',
    initialState:{
        loading: false,
        isError: false,
        data: null,
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchData.fulfilled, (state, action)=>{
            state.loading=false
            state.data=action.payload
        })
        builder.addCase(fetchData.pending,(state,action)=>{
            state.loading= true
        })
        builder.addCase(fetchData.rejected, (state,action)=>{
            state.loading= false,
            console.log("Error", action.payload);
            state.isError=true
        })
    }
})

export default todoSlice.reducer;
